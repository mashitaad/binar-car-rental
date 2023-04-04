import React, { useState } from "react";
import "./fetch.css";
import CustomButton from "../../../components/homepage/button/Button"
import { Link } from "react-router-dom"

export default function Search(props) {

    const [form, setForm] = useState({
      name: '',
      category: '',
      isRented: '',
      maxPrice:''
    })
  
    return (
      <>
        <div className="container search-bar">
{/* FORM PERTAMA */}
          <form className="table-option" onSubmit={(e) => {
            e.preventDefault()
            props.onSubmit(form)
          }}>
            <div>
              <label htmlFor="inputEmail4" className="title-search">
                Nama Mobil
              </label>
              <input
                type="nama mobil"
                className="form-control"
                id="inputNamaMobil"
                placeholder="Ketik nama/tipe mobil"
                onChange={e => setForm({
                  ...form,
                  ...{
                    name: e.target.value
                  }
                })}/>
            </div>
{/* FORM KEDUA */}            
            <div>
              <label htmlFor="inputState" className="title-search">
                Kategori
              </label>
              <select id="inputState" 
              className="form-select"
              onChange={e => setForm({
                ...form,
                ...{
                  category: e.target.value
                }
              })}
              >
                <option value="">Masukan Kapasitas Mobil</option>
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </select>
            </div>
{/* FORM KETIGA */}
            <div>
              <label htmlFor="inputState" className="title-search">
                Harga
              </label>
              <select id="inputState" 
              className="form-select"
              onChange={e => setForm({
                ...form,
                ...{
                  maxPrice: e.target.value
                }
              })}
              >
                <option value="">Masukan Harga Per Hari</option>
                <option value="400000">&lt; Rp.400000</option>
                <option value="500000">Rp.400000 - Rp.600000</option>
                <option value="600000">&gt; Rp.600000</option>
              </select>

            </div>
{/* FORM KEEMPAT */}
            <div>
              <label htmlFor="inputState" className="title-search">
                Status
              </label>
              <select id="inputState" 
              className="form-select"
              onChange={e => setForm({
                ...form,
                ...{
                  isRented: e.target.value
                }
              })}
              >
                <option value="">Pilih Status Mobil</option>
                <option value="false">Free</option>
                <option value="true">Disewa</option>
              </select>
            </div>
  
            <div>
            <Link to="submit"><CustomButton className="button-search">Cari Mobil</CustomButton></Link>
            </div>
          </form>
        </div>
      </>
    );
  }
  
  Search.defaultProps = {
    onSubmit: () => { }
  }
  
