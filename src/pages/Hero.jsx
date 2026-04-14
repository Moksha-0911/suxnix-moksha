import React from "react";
import "../styles/Hero.css";
import moksha from "../assets/images/protien-jars.png";
import product from "../assets/images/rounded-leaf.png";
import yourGreenBgImage from "../assets/images/leaf-background.webp";
import powderImage from "../assets/images/herbal-powder.webp";
import banner1 from "../assets/images/banner_shape01.webp";
import banner2 from "../assets/images/banner_shape02.avif";
import proteinjar from "../assets/images/seriour mass-jar.webp";
import tealeaf from "../assets/images/tea-leaf.avif";
import brand1 from "../assets/images/brand_03.webp";
import brand2 from "../assets/images/brand_01.png";
import brand3 from "../assets/images/brand_04.webp";
import brand4 from "../assets/images/brand_06.webp";
import brand5 from "../assets/images/brand_02.webp";
import brand6 from "../assets/images/brand_05.webp";
import proteinwhey from "../assets/images/protein-whey.webp";
import tealeaf2 from "../assets/images/tea-leaf2.avif";
import homeshop1 from "../assets/images/home_shop_thumb02.avif";
import homeshop2 from "../assets/images/home_shop_thumb03.avif";
import homeshop3 from "../assets/images/home_shop_thumb04.avif";
import homeshop4 from "../assets/images/home_shop_thumb01.avif";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';
import massmax from "../assets/images/mass-maxx.webp";
import tealeaf3 from "../assets/images/tea-leaf3.webp";

function Hero() {
  return (
    <main>

      <div className="container" style={{ position: "relative" }}>
        <img
          src={banner1}
          className="leaf1"
          alt=""
          style={{
            position: "absolute",
            top: "10%",
            left: "1%",
            transform: "translateX(-50%)",
            zIndex: "0",
            width: "120px",
            padding: "20px"  // adjust as needed

          }}
        />
        <img
          src={banner2}
          alt=""
          style={{
            position: "absolute",
            top: "0%",        // adjust vertically as needed
            right: "0",        // stick to right side
            zIndex: "0",       // behind text
            width: "130px",
            padding: "10px"    // adjust size

          }}
        />
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
            <div className="banner-content text-center">


              <p className="banner-caption">
                .. Increased Energy With SUXNIX ..
              </p>

              <h2 className="title">
                Mix Protein Provided Way To Growth
              </h2>

              <a href="#" className="btn btn-two">
                Shop Now
              </a>

            </div>

            <div className="banner-content">
              <img src={moksha} className="protien" alt="" />
              <img src={product} className="leaf" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-title text-center mb-50">
                <p className="title">Perfect Brand is Featured on</p>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-swiper">
          <div className="container">
            <Swiper
              disableOnInteraction:false
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
              }} modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand1} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand2} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand3} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand4} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand5} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand6} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand1} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand2} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand3} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand4} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand5} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row">
                  <div className="col-sm-2">
                    <div className="brand-item">
                      <a href="">
                        <img src={brand6} className="brand-1" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

{/* ===== FEATURES SECTION START ===== */}
      <section
        className="features-area"
        style={{ backgroundImage: `url(${yourGreenBgImage})` }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <div className="features-left">

                <div className="feature-item">
                  <div className="icon"><i className="fa-solid fa-apple-whole"></i></div>
                  <h4>MULTI FRUITS FLAVOUR</h4>
                  <p>A thing added to something else in order to complete or enhance it.</p>
                </div>

                <div className="feature-item">
                  <div className="icon"><i className="fa-solid fa-flask"></i></div>
                  <h4>FLOWER FORMULA</h4>
                  <p>A thing added to something else in order to complete or enhance it.</p>
                </div>

                <div className="feature-item">
                  <div className="icon"><i className="fa-solid fa-weight-scale"></i></div>
                  <h4>FISHBONE DIAGRAM</h4>
                  <p>A thing added to something else in order to complete or enhance it.</p>
                </div>

                <div className="feature-item">
                  <div className="icon"><i className="fa-solid fa-dumbbell"></i></div>
                  <h4>100% FAT BLASTING</h4>
                  <p>A thing added to something else in order to complete or enhance it.</p>
                </div>

              </div>
            </div>


            <div className="col-lg-6 text-center">
              <img src={powderImage} className="feature-img" alt="" />
            </div>

          </div>
        </div>
      </section>
      <div className="container" style={{ position: "relative" }}>
        <div className="features-products-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="features-products-thumb">
                <div className="main-img">
                  <img src={proteinjar} className="protein-jar" alt="" />
                  <img src={tealeaf} className="tea-leaf" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="features-product-content">
                <h2 className="title">
                  <a href="">SERIOUR MASS</a>
                </h2>
                <h6 className="features-product-quantity">High-strength, 5000IU</h6>
                <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness.</p>
                <div className="features-product-bottom">
                  <a href="" className="btn-btn">Shop Now</a>
                 
                  <span className="price">
                    $89.99
                    <span className="old-price" style={{ color: "orange" }}>&nbsp; $117.99</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div class="features-products-wrap reverse">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="features-products-thumb-reverse" style={{position:"relative"}}>
                <div className="main-img2">
                <img src={proteinwhey} className="protein-whey" alt="" />
                <img src={tealeaf2} className="tea-leaf2" alt="" />
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="features-product-content">
                <h2 className="title">
                  <a href="">Protein Whey</a>
                </h2>
                <h6 className="features-product-quantity">High-strength, 4000IU</h6>
                <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness.</p>
                <div className="features-product-bottom">
                  <a href="" class="btn-btn">Shop Now</a>
                  <span className="price">
                    $59.99&nbsp;
                    <span className="old-price" style={{color:"orange"}}>$79.99</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="features-products-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="features-products-thumb3">
                <div className="main-img3">
                  <img src={massmax} className="mass-max" alt="" />
                  <img src={tealeaf3} className="tea-leaf3" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="features-product-content">
                <h2 className="title">
                  <a href="">SERIOUR MASS</a>
                </h2>
                <h6 className="features-product-quantity">High-strength, 5000IU</h6>
                <p>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness.</p>
                <div className="features-product-bottom">
                  <a href="" className="btn-btn">Shop Now</a>
                 
                  <span className="price">
                    $89.99
                    <span className="old-price" style={{ color: "orange" }}>&nbsp; $117.99</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-area" >
          <div className="container" >
            <div className="row">
              <div className="col-lg-12">
                <div className="protein-swiper" >
                  
                    <Swiper
        disableOnInteraction: false
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        centeredSlides={false}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 2500,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row">
            <div className="col-sm-2">
              <div className="protein-jars">
                <a href="">
                  <img src={homeshop1} className="homeshop-1" alt="" />
                </a>

                </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-sm-2">
              <div className="protein-jars">
                <a href="">
                  <img src={homeshop2} className="homeshop-2" alt="" />
                </a>

                </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-sm-2">
              <div className="protein-jars">
                <a href="">
                  <img src={homeshop3} className="homeshop-3" alt="" />
                </a>

                </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-sm-2">
              <div className="protein-jars">
                <a href="">
                  <img src={homeshop4} className="homeshop-4" alt="" />
                </a>

                </div>
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
                  </div>
                </div>

              </div>
            </div>
          </div>
      
      <div className="fact-items-wrapper" style={{position:"relative"}}>
      <div className="row g-0 justify-content-center"><div class="col-lg-4 col-md-6 col-sm-9">
            <div className="fact-item">
              <div className="chart" data-percent="65">
                <span
  className="percentage"
  style={{ background: "conic-gradient(#f39c12 65%, #eee 0%)" }}
>
  <span className="text">65<small>%</small></span>
</span>
              </div>
              <div className="fact-content">
                <h4 className="title" style={{paddingLeft:"20%",fontFamily:"'Oswald',sans-serif"}}>Active Members</h4>
                <span style={{color:"grey",paddingLeft:"20px"}}>Yes we did it asap software</span>
              </div>
            </div>
          </div><div className="col-lg-4 col-md-6 col-sm-9">
            <div className="fact-item">
              <div className="chart" data-percent="90">
                <span
  className="percentage"
  style={{ background: "conic-gradient(#f39c12 90%, #eee 0%)" }}
>
  <span className="text">90<small>%</small></span>
</span>
              </div>
              <div className="fact-content">
                <h4 className="title" style={{paddingLeft:"20%",fontFamily:"'Oswald',sans-serif"}}>Projects Done</h4>
                <span style={{color:"grey",paddingLeft:"20px"}}>Yes we did it asap software</span>
              </div>
            </div>
          </div><div className="col-lg-4 col-md-6 col-sm-9">
            <div className="fact-item">
              <div className="chart" data-percent="80">
                <span
  className="percentage"
  style={{ background: "conic-gradient(#f39c12 80%, #eee 0%)" }}
>
  <span className="text">80<small>%</small></span>
</span>
              </div>
              <div className="fact-content">
                <h4 className="title" style={{paddingLeft:"20%",fontFamily:"'Oswald',sans-serif"}}>Get Rewards</h4>
                <span style={{color:"grey",paddingLeft:"20px"}}>Yes we did it asap software</span>
              </div>
            </div>
          </div></div>
    </div>
    <div class="section-title mb-60">
                <p class="sub-title">.. Increased Energy With Suxnix ..</p>
                <h2 class="title">Suxnix Ingredients</h2>
              </div>
    </main>


  );
}

export default Hero;