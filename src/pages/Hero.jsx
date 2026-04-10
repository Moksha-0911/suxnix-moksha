import React from "react";
import "../styles/Hero.css";
import moksha from "../assets/images/protien-jars.png";
import product from "../assets/images/rounded-leaf.png";
import yourGreenBgImage from "../assets/images/leaf-background.webp";
import powderImage from "../assets/images/herbal-powder.webp";
import banner1 from "../assets/images/banner_shape01.webp";
import banner2 from "../assets/images/banner_shape02.avif";
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
      width: "110px", 
      padding:"20px"  // adjust as needed
     
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
    padding:"10px"    // adjust size
    
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
    </main>


  );
}

export default Hero;