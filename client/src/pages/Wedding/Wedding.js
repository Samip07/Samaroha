import React from "react";
import { Navbar, Footer } from "../../components";
import dest from "../../assets/dest.jpg";
import wedding from "../../assets/wedding.jpg";

import './Wedding.css'
const Wedding = () => {
  return (
    <>
      <Navbar />
      <div className="container_wed">
        <div className="content1">
        <img src={dest} alt="" />
        </div>
        <div className="content2">
          <h1>“One love, one heart, one destiny.”</h1>
        </div>
        <div className="content3">
          <img src={wedding} alt="" />
          <p>
          At Samaroha, we believe that your wedding day should be nothing short of magical. Our experienced event planning team is dedicated to making your dream wedding a reality, handling every detail from venue selection and décor to entertainment, catering, and logistics. Whether you envision an intimate ceremony or a grand celebration, we work closely with you to ensure every aspect of your special day reflects your unique love story. With our expert coordination and personalized approach, you can relax and enjoy every moment, knowing that your wedding is in the best hands.,<br />
          We specialize in crafting unforgettable weddings that reflect your unique love story. From intimate ceremonies to grand celebrations, our expert team handles every detail—venue selection, décor, catering, and entertainment—ensuring your special day is seamless and stress-free. With personalized planning and flawless execution, we make sure your wedding is everything you’ve ever dreamed of and more.


          </p>
        </div>
      </div>
      
  
      <Footer />
    
    </>
  );
};

export default Wedding;
