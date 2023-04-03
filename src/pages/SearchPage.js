import Footer from "../components/header/footer/Footer"
import Navbar from "../components/header/navbar/Navbar"
import Hero from '../components/homepage/hero/Hero'
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../components/constant/config"
import Search from "../components/sewa/search/Search"
import CarData from "../components/sewa/cardata/cardata"

export default function SearchPage() {
  const [dataCar, setDataCar] = useState({
    cars: []
  });

  const [isLoading, setIsLoading] = useState(true); // tambahan state isLoading

  useEffect(() => {
    getCars();
  }, []);

  const API_URL = config.API_BASE_URL
  const getCars = async (params = {}) => {
    setIsLoading(true); // set isLoading menjadi true saat data diambil
    try {
      const response = await axios.get(
        API_URL + "/customer/v2/car", {
        params
      }
      );
      setDataCar(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // set isLoading menjadi false setelah data selesai diambil
    }
  };

  const onFilter = (payload) => {
    getCars(payload)
  }

  return (
    <>
      <Navbar />
      <Hero showButton={false} />
      <Search onSubmit={onFilter} />
      {isLoading ? ( // menampilkan loading jika isLoading true
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <CarData data={dataCar} />
      )}
      <Footer />
    </>
  )
}
