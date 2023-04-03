import Footer from "../components/header/footer/Footer"
import Navbar from "../components/header/navbar/Navbar"
import Content from "../components/sewa/content/Content"
import "./content.css"
import axios from "axios";
import config from "../components/constant/config"
import SearchDetail from "../components/sewa/search/SearchFilter"
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

export default function ContentPage() {
    const [dataCar, setDataCar ] = useState({})
  
    const { id } = useParams();
  
    useEffect(()=> { 
      const getCarById = async() => {
        const API_URL = config.API_BASE_URL + `/customer/car/${id}`
        const response = await axios.get(API_URL)
        setDataCar(response.data)
      }
      getCarById();  
    },[id])
  
    return (
      <>
      <Navbar />
        <div className="background"></div>
        <SearchDetail data={dataCar} />
        <Content data={dataCar}/>
        <Footer />
      </>
    )
  }
  