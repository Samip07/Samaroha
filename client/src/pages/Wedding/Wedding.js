import React from "react";
import { Navbar, Footer } from "../../components";
import dest from "../../assets/dest.jpg";
import wedding from "../../assets/wedding.jpg";
import wed1 from "../../assets/wed1.png";
import wed2 from "../../assets/wed2.jpg";
import wed3 from "../../assets/wed3.jpg";
import wed4 from "../../assets/wed4.jpg";
import offerimg from "../../assets/offerimg.jpg";
import venue1 from "../../assets/venue1.jpg";
import venue2 from "../../assets/venue2.jpg";
import venue3 from "../../assets/venue3.jpg";
import venue4 from "../../assets/venue4.jpg";
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

        <h1 className="head1" >Some Wedding photographs</h1>
        <div className="content4">
        
          
          <img src={wed1} alt="" />
          <img src={wed2} alt="" />
          <img src={wed3} alt="" />
          <img src={wed4} alt="" />


        </div>
        <div className="content5">
          <h1>What we Offer</h1>
        </div>
        <div className="content6">
          <img src={offerimg} alt="" />
          <p>
          For a limited time, we’re offering 15% off on all full-service wedding packages! Let us bring your vision to life with our expert planning, stunning décor, and top-tier vendors. Our package includes:<br/><br/>

Free consultation with a dedicated wedding planner<br/>
Complimentary tasting session for the couple<br/>
Customizable décor and floral arrangements<br/>
Exclusive discounts with partner venues and vendors<br/>
Plus, book within the next 30 days and receive a complimentary photography session for your engagement shoot!<br/><br/>

Contact us today to schedule your consultation and start planning the wedding of your dreams!


          </p>
        </div>
        <h1 className="head1" >Some Beautiful Wedding Venue</h1>
        <div className="content7">
        <img src={venue1} alt="" />
          <img src={venue2} alt="" />
          <img src={venue3} alt="" />
          <img src={venue4} alt="" />
        </div>
      </div>
      
  
      <Footer />
    
    </>
  );
};

export default Wedding;
