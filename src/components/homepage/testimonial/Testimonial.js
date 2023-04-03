import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonial.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import star_icon from '../../../assets/icon/testimonial_star.svg'

export default function Testimonial({ testimonialCom }) {
  return (
    <>
      <div className="mb-5 testi-title">
        <h3 className="mb-3">Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonialCom.map((item) => {
          const stars = [];

          for (let i = 0; i < item.star; i++) {
            stars.push(<
            img
            key={i}
            src={star_icon}
            alt="star"
            />
            );
          }
          return (
            <SwiperSlide className="swiper-slide">
              <div className="testi-content" key={item.id}>
                <div className="row">
                  <div className="align-items-center col-md-3 d-flex justify-content-center">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded-circle"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                  <div className="col-md-9">
                    <div>
                      <h4>{stars}</h4>
                    </div>
                    <div className="desc-testi">
                      <p>"{item.testimonial}"</p>
                    </div>
                    <div className="profile-testi">
                      <p>
                        {item.name} {item.age}, {item.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

