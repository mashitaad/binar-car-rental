import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";
import CustomButton from "../button/Button";

export default function Cta() {
  return (
    <>
      <div className="main">
        <div className="cta-banner container">
          <div className="row">
            <div className="col-md-12 cta-wrap">
              <div className="cta-content">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                  <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Assumenda, quas. Eaque esse consequuntur voluptatum
                  ab doloremque molestiae ad saepe quidem.
                  </p>
                  <Link to="/car">
                    <CustomButton>Mulai Sewa Mobil</CustomButton>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
