import React from "react";

export default function SearchDetail(props) {

    return (
      <>
        <div className="container search-bar">
          <div className="title-search">
            <h5>Pencarianmu</h5>
          </div>
  
          <form className="table-option">
{/* FORM PERTAMA */}
            <div className="grid-input">
              <label htmlFor="inputState" className="title-search">
                Nama Mobil
              </label>
              <input
                type="nama mobil"
                className="form-control"
                id="inputNamaMobil"
                placeholder={props.data.name}
                disabled />
            </div>
{/* FORM KEDUA */}
            <div className="grid-input">
              <label htmlFor="inputState" className="title-search">
                Kategori
              </label>
              <input id="inputState"
                className="form-select"
                disabled
                placeholder={props.data.category === 'small' ? '2-4 orang' :
                  props.data.category === 'medium' ? '4-6 orang' :
                    props.data.category === 'large' ? '6-8 orang' :
                      props.data.category}
  
              />
            </div>
{/* FORM KETIGA */}
            <div className="grid-input">
              <label htmlFor="inputState" className="form-label" disabled>
                Harga
              </label>
              <input id="inputState"
                className="form-select"
                disabled
                placeholder={props.data.price}
              />
            </div>
{/* FORM KEEMPAT */}
            <div className="grid-input">
              <label htmlFor="inputState" className="form-label" disabled>
                Status
              </label>
              <input id="inputState"
                className="form-select"
                disabled
                placeholder={props.data.status === true ? 'disewa' : 'tersedia'}
              />
            </div>
          </form>
          </div>
      </>
    );
  }
