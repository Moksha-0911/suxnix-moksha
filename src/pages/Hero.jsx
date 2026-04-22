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
import tealeaf4 from "../assets/images/ingredients_shape_leaf.avif";
import item1 from "../assets/images/ingredients_item01.webp";
import item2 from "../assets/images/ingredients_item02.webp";
import item3 from "../assets/images/ingredients_item03.webp";
import item4 from "../assets/images/ingredients_item04.webp";
import formula from "../assets/images/formula_img.webp";
import pricing1 from "../assets/images/pricing_01.avif";
import pricing2 from "../assets/images/pricing_02.avif";
import pricing3 from "../assets/images/pricing_03.avif";
import blogthumb from "../assets/images/inner_blog_thumb03.webp";
import blogthumb2 from "../assets/images/inner_blog_thumb02.webp";
import blogthumb3 from "../assets/images/inner_blog_thumb01.webp";
import testi from "../assets/images/testi_avatar01.webp";
import testi2 from "../assets/images/testi_avatar02.webp";
import testi3 from "../assets/images/testi_avatar03.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import massmax from "../assets/images/mass-maxx.webp";
import tealeaf3 from "../assets/images/tea-leaf3.webp";
import testimonial from "../assets/images/testimonial_bg.webp";

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
              <div className="features-products-thumb-reverse" style={{ position: "relative" }}>
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
                    <span className="old-price" style={{ color: "orange" }}>$79.99</span></span>
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
      <div className="swiper-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="protein-swiper" >

                <Swiper
                  disableOnInteraction:false
                  spaceBetween={10}
                  slidesPerView={3}
                  loop={true}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  autoplay={{
                    delay: 2500,

                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper ProteinJarSwipe"
                >
                  <SwiperSlide>
                    <div className="slick-clone">
                      <div className="home-shop-item">
                        <div className="home-shop-thumb">
                          <a href="">
                            <img src={homeshop1} className="homeshop" alt="" />
                          </a>
                          <div className="shop-thumb-shape gray"></div>
                        </div>
                        <div className="home-shop-content">
                          <h4 className="title">
                            <a href="">Whey Protein Powder</a>
                          </h4>
                          <span className="home-shop-price">Tk 49.99</span>
                          <div className="home-shop-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slick-clone">
                      <div className="home-shop-item">
                        <div className="home-shop-thumb">
                          <a href="">
                            <img src={homeshop2} className="homeshop" alt="" />
                          </a>
                          <div className="shop-thumb-shape gray"></div>
                        </div>
                        <div className="home-shop-content">
                          <h4 className="title">
                            <a href="">Whey Protein Powder</a>
                          </h4>
                          <span className="home-shop-price">Tk 49.99</span>
                          <div className="home-shop-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slick-clone">
                      <div className="home-shop-item">
                        <div className="home-shop-thumb">
                          <a href="">
                            <img src={homeshop3} className="homeshop" alt="" />
                          </a>
                          <div className="shop-thumb-shape gray"></div>
                        </div>
                        <div className="home-shop-content">
                          <h4 className="title">
                            <a href="">Whey Protein Powder</a>
                          </h4>
                          <span className="home-shop-price">Tk 49.99</span>
                          <div className="home-shop-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slick-clone">
                      <div className="home-shop-item">
                        <div className="home-shop-thumb">
                          <a href="">
                            <img src={homeshop4} className="homeshop" alt="" />
                          </a>
                          <div className="shop-thumb-shape gray"></div>
                        </div>
                        <div className="home-shop-content">
                          <h4 className="title">
                            <a href="">Whey Protein Powder</a>
                          </h4>
                          <span className="home-shop-price">Tk 49.99</span>
                          <div className="home-shop-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slick-clone">
                      <div className="home-shop-item">
                        <div className="home-shop-thumb">
                          <a href="">
                            <img src={homeshop3} className="homeshop" alt="" />
                          </a>
                          <div className="shop-thumb-shape gray"></div>
                        </div>
                        <div className="home-shop-content">
                          <h4 className="title">
                            <a href="">Whey Protein Powder</a>
                          </h4>
                          <span className="home-shop-price">Tk 49.99</span>
                          <div className="home-shop-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
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
      <section className="shopify-section">
        <div className="video-area video-bg">
          <div className="video-bg-overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="video-btn">
                  <a href="https://www.youtube.com/watch?v=HQfF5XRVXjU" className="popup-video ripple-white">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fact-items-wrapper" style={{ position: "relative" }}>
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
              <h4 className="title" style={{ paddingLeft: "20%", fontFamily: "'Oswald',sans-serif" }}>Active Members</h4>
              <span style={{ color: "grey", paddingLeft: "20px" }}>Yes we did it asap software</span>
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
                <h4 className="title" style={{ paddingLeft: "20%", fontFamily: "'Oswald',sans-serif" }}>Projects Done</h4>
                <span style={{ color: "grey", paddingLeft: "20px" }}>Yes we did it asap software</span>
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
                <h4 className="title" style={{ paddingLeft: "20%", fontFamily: "'Oswald',sans-serif" }}>Get Rewards</h4>
                <span style={{ color: "grey", paddingLeft: "20px" }}>Yes we did it asap software</span>
              </div>
            </div>
          </div></div>
      </div>
      <div className="container">
        <div className="row" style={{ alignItems: "center", justifyContent: "center" }}>
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="ingredients-img" style={{ position: "relative" }}>
              <img src={proteinwhey} className="protein-whey2" alt="" />
              <img src={tealeaf4} className="leaf-4" alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-9">
            <div className="ingredients-items-wrap">
              <div className="section-title">
                <p className="subtitle">..Increased Energy With Suxnix..</p>
                <h2 className="title2">Suxnix Ingredients</h2>
              </div>
              <div className="row" style={{ marginTop: "5%" }}>
                <div className="col-md-6 col-sm-8">
                  <div className="ingredients-item-wow">
                    <div className="ingredients-thumb">
                      <img src={item1} className="item-1" alt="" />
                    </div>
                    <div className="ingredients-content">
                      <h5 className="content-title">
                        Helps You Stick To Your Diet
                      </h5>
                      <p>
                        A thing added to something else in order to complete or enhance it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8">
                  <div className="ingredients-item-wow">
                    <div className="ingredients-thumb">
                      <img src={item2} className="item-1" alt="" />
                    </div>
                    <div className="ingredients-content">
                      <h5 className="content-title">
                        Helps You Stick To Your Diet
                      </h5>
                      <p>
                        A thing added to something else in order to complete or enhance it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8">
                  <div className="ingredients-item-wow">
                    <div className="ingredients-thumb">
                      <img src={item3} className="item-1" alt="" />
                    </div>
                    <div className="ingredients-content">
                      <h5 className="content-title">
                        Helps You Stick To Your Diet
                      </h5>
                      <p>
                        A thing added to something else in order to complete or enhance it.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8">
                  <div className="ingredients-item-wow">
                    <div className="ingredients-thumb">
                      <img src={item4} className="item-1" alt="" />
                    </div>
                    <div className="ingredients-content">
                      <h5 className="content-title">
                        Helps You Stick To Your Diet
                      </h5>
                      <p>
                        A thing added to something else in order to complete or enhance it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tg-supplement-inner">
          <div className="row" style={{ marginTop: "10%" }}>
            <div className="col-lg-6 col-md-8 order-0 order-lg-2">
              <div className="tg-supplement-img">
                <img src={formula} className="formula-img" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tg-supplement-content">
                <div className="tg-title">
                  <span className="tg-subtitle">
                    .. Suxnix Formula ..
                  </span>
                  <h2 className="tg-title2">Why We Chose This Formula</h2>
                </div>
                <a href="#" className="tg-btn">Know More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="price-section">
        <div className="container" style={{ position: "relative" }}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-9">
              <div className="section-title">
                <p className="section-subtitle">.. Suxnix Plans ..</p>
                <h2 className="section-title">SUPPLEMENT PACKAGES</h2>
              </div>
            </div>
          </div>
          <div className="pricing-wrap">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="pricing-item" >
                  <div className="pricing__box" style={{ marginTop: "80px" }}>
                    <div className="pricing-hade">
                      <span>1 Bottle Of</span>
                      <h3 className="section-title2">Suxnix</h3>
                      <p>(1 x 250 veggie caps bottle)</p>
                    </div>
                    <div className="pricing-img">
                      <img src={pricing1} className="pricing" alt="" />
                    </div>
                    <div className="pricing-price">
                      <h4 className="price">$69</h4>
                      <span>Per <br></br>Bottle</span>
                    </div>
                    <h5 className="total">($69 TOTAL)</h5>
                    <div className="price-savings">
                      <h4 className="save">Save 14%</h4>
                      <span>+ Free Shipping</span>
                    </div>
                    <div className="pricing-btn">
                      <a href="">
                        Buy Now
                        <span>365 Day Full Money Back Guaranteed</span>
                      </a>
                    </div>
                    <div className="bottom-img"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="pricing-item">
                  <div className="pricing-title">
                    <h4 className="pricing-title">★ Most Popular ★</h4>
                  </div>
                  <div className="pricing__box">
                    <div className="pricing-hade">
                      <span>1 Bottle Of</span>
                      <h3 className="pricing-title2">Suxnix</h3>
                      <p>(1 x 250 veggie caps bottle)</p>
                    </div>
                    <div className="pricing-img">
                      <img src={pricing2} className="pricing" alt="" />
                    </div>
                    <div className="pricing-price">
                      <h4 className="price">$69</h4>
                      <span>Per <br></br>Bottle</span>
                    </div>
                    <h5 className="total">($69 TOTAL)</h5>
                    <div className="price-savings">
                      <h4 className="save">Save 14%</h4>
                      <span>+ Free Shipping</span>
                    </div>
                    <div className="pricing-btn">
                      <a href="">
                        Buy Now
                        <span>365 Day Full Money Back Guaranteed</span>
                      </a>
                    </div>
                    <div className="bottom-img"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-9">
                <div className="pricing-item">
                  <div className="price-title">
                    <h4 className="pricing-title3">✓ Best Value</h4>
                  </div>
                  <div className="pricing__box">
                    <div className="pricing-hade">
                      <span>1 Bottle Of</span>
                      <h3 className="pricing-title4">Suxnix</h3>
                      <p>(1 x 250 veggie caps bottle)</p>
                    </div>
                    <div className="pricing-img">
                      <img src={pricing3} className="pricing" alt="" />
                    </div>
                    <div className="pricing-price">
                      <h4 className="price">$69</h4>
                      <span>Per <br></br>Bottle</span>
                    </div>
                    <h5 className="total">($69 TOTAL)</h5>
                    <div className="price-savings">
                      <h4 className="save">Save 14%</h4>
                      <span>+ Free Shipping</span>
                    </div>
                    <div className="pricing-btn">
                      <a href="">
                        Buy Now
                        <span>365 Day Full Money Back Guaranteed</span>
                      </a>
                    </div>
                    <div className="bottom-img"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-area">
        <div className="testimonial-wrapper">
        <img src={testimonial} className="testimonial" alt="" style={{paddingTop:"100px",paddingBottom:"100px"}}/>
        </div>
        <div className="testimonial-overlay">
          <div className="container">
            <div className="row">
                <div className="col-xxl-8 col-xl-9 col-lg-11">
                  <div className="testimonial-swiper">
                    <div className="swiper-button-prev custom-arrow left">←</div>
                      <div className="swiper-button-next custom-arrow right">→</div>
                    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="TestimonialSwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="testimonial-content">
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">
              Becoming more involved in administration within the health system over the years...
            </p>

            <img src={testi} className="testi" alt="" />

            <h4>JANETA COOPER</h4>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="testimonial-content">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">Second testimonial...</p>
            <img src={testi2} className="testi" alt="" />
            <h4>JANETA COOPER</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-content">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">Second testimonial...</p>
            <img src={testi3} className="testi" alt="" />
            <h4>JANETA COOPER</h4>
          </div>
        </SwiperSlide>

        
      </Swiper>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="blog-inner-wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              <div className="blog-posts-wrapper">
                <div className="blog-posts-title">
                  <p className="blog-posts-subtitle">.. Suxnix News ..</p>
                  <h2 className="posts-title">Latest News</h2>
                </div>
                <div className="blog-post-item">
                  <a href="https://suxnix-dev.myshopify.com/blogs/news/laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor"></a></div>
                <div className="blog-post-thumb">
                  <img src={blogthumb} className="blogthumb" alt="" style={{width:"90px",height:"90px"}}/>
                  <div className="blog-post-content">
                    <div className="content-top">
                      <div className="tags">
                        <a href="https://suxnix-dev.myshopify.com/blogs/news/tagged/business">business</a>
                      </div>
                      <span className="date">
                        <i className="far fa-clock"></i>
                        <time datetime="2025-01-16T08:16:19Z">January 16, 2025</time>
                      </span>
                    </div>
                    <h3 className="con-title">
                      <a href="https://suxnix-dev.myshopify.com/blogs/news/laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor">Laboris nisi ut aliquip ex ea commodo consequat, Duis aute irure dolor.</a>
                    </h3>
                    <div className="content-bottom">
                      <ul className="list-wrap">
                        <li className="user">Posted by -
                          <a href="#">Web Developer</a>
                        </li>
                        <li className="comments">
                          <i className="far fa-envelope"></i>
                          "0"
                        </li>
                        <li className="viewers">
                          <i className="far fa-eye"></i>
                          "k"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-post-item">
                  <a href="https://suxnix-dev.myshopify.com/blogs/news/laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor"></a></div>
                <div className="blog-post-thumb">
                  <img src={blogthumb2} className="blogthumb" alt="" style={{width:"90px",height:"90px"}}/>
                  <div className="blog-post-content">
                    <div className="content-top">
                      <div className="tags">
                        <a href="https://suxnix-dev.myshopify.com/blogs/news/tagged/business">business</a>
                      </div>
                      <span className="date">
                        <i className="far fa-clock"></i>
                        <time datetime="2025-01-16T08:16:19Z">January 16, 2025</time>
                      </span>
                    </div>
                    <h3 className="con-title">
                      <a href="https://suxnix-dev.myshopify.com/blogs/news/laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor">Adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore..</a>
                    </h3>
                    <div className="content-bottom">
                      <ul className="list-wrap">
                        <li className="user">Posted by -
                          <a href="#">Web Developer</a>
                        </li>
                        <li className="comments">
                          <i className="far fa-envelope"></i>
                          "0"
                        </li>
                        <li className="viewers">
                          <i className="far fa-eye"></i>
                          "k"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-post-item">
                  <a href="https://suxnix-dev.myshopify.com/blogs/news/laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor"></a></div>
                <div className="blog-post-thumb">
                  <img src={blogthumb3} className="blogthumb" alt="" style={{width:"90px",height:"90px"}}/>
                  <div className="blog-post-content">
                    <div className="content-top">
                      <div className="tags">
                        <a href="https://suxnix-dev.myshopify.com/blogs/news/tagged/business">business</a>
                      </div>
                      <span className="date">
                        <i className="far fa-clock"></i>
                        <time datetime="2025-01-16T08:16:19Z">January 16, 2025</time>
                      </span>
                    </div>
                    <h3 className="con-title">
                      <a href="https://suxnix-dev.myshopify.com/blogs/news/laboris-nisi-ut-aliquip-ex-ea-commodo-consequat-duis-aute-irure-dolor">Lorem ipsum dolor sit amet consecte cing elit sed do eiusmod tempor..</a>
                    </h3>
                    <div className="content-bottom">
                      <ul className="list-wrap">
                        <li className="user">Posted by -
                          <a href="#">Web Developer</a>
                        </li>
                        <li className="comments">
                          <i className="far fa-envelope"></i>
                          "0"
                        </li>
                        <li className="viewers">
                          <i className="far fa-eye"></i>
                          "k"
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="faq-wrapper">
                <div className="faq-title">
                  <p className="faq-subtitle">
                    .. Common Questions ..
                  </p>
                  <h2 className="faq-title2">Frequently Asked Questions</h2>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button ">
                        <span className="count">01.</span>
                        Suxnix ingredients provides a searchable ?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse">
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button ">
                        <span className="count">02.</span>
                        How to edit Suxnix themes ?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse">
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button ">
                        <span className="count">03.</span>
                        Suxnix app is a powerful application ?</button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse">
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button ">
                        <span className="count">04.</span>
                        Latest version thorough Suxnix powerful ?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse">
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button ">
                        <span className="count">05.</span>

                        How to Track My Order ?

                      </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse">
                      <div className="accordion-body">
                        There are many variations of passages of lorem ipsum that available but the majority have alteration in some form by injected humour. There are many variations of passages.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Hero;