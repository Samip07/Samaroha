import React from "react";
import { Navbar, Footer } from "../../components";
import party from "../../assets/party.jpg";
import party1 from "../../assets/party1.jpg";
import party5 from "../../assets/party5.jpg";
import party2 from "../../assets/party2.jpg";
import party3 from "../../assets/party3.jpg";
import party4 from "../../assets/party4.jpg";
import birthday from "../../assets/birthday.jpg";
import concert from "../../assets/concert.jpg";
import celeb1 from "../../assets/celeb1.jpg";
import celeb2 from "../../assets/celeb2.jpg";
import celeb3 from "../../assets/celeb3.jpg";
import celeb4 from "../../assets/celeb4.jpg";
import './Party.css'
const Party = () => {
  return (
    <>
      <Navbar />

      <div className="container_pty">
        <div className="content_pty1">
        <img src={party} alt="" />
        </div>
        <div className="content_pty2">
          <h1>“Celebration is my attitude, unconditional to what life brings.”</h1>
        </div>
        <div className="content_pty3">
          <img src={party1} alt="" />
          <p>
          At Samaroha, we understand that a successful meeting requires careful planning, attention to detail, and flawless execution. Whether you’re organizing a corporate conference, a board meeting, or an intimate team gathering, our dedicated event management team ensures that every aspect of your meeting is meticulously arranged. From venue selection and audiovisual setup to catering and logistics, we provide personalized solutions tailored to your specific needs. With our expertise and commitment, your meeting will run seamlessly, allowing you to focus on what matters most—connecting, collaborating, and achieving your goals.
          Hosting a party is about more than just gathering people—it’s about creating memories. Whether it’s a birthday, anniversary, or corporate event, every party should reflect the host's personality and purpose. We specialize in curating events that bring your vision to life, from selecting the perfect venue and catering to stunning decorations and entertainment. Our team ensures every detail is flawless, so you can relax and enjoy your celebration. Let us help you turn your event into an unforgettable experience for your guests.


          </p>
        </div>

        <h1 className="head1" >Some Parties photographs</h1>
        <div className="content_pty4">
        
          
          <img src={party5} alt="" />
          <img src={party2} alt="" />
          <img src={party3} alt="" />
          <img src={party4} alt="" />


        </div>
        <div className="content_pty5">
          <h1>What we Offer</h1>
        </div>
        <h2 className="bp">Birthday Parties</h2>
        <div className="content_pty6">
          <img src={birthday} alt="" />
          <p>
          A birthday is more than just a milestone; it's a celebration of life and cherished moments. At our event management company, we believe that every birthday should be unique, personalized, and unforgettable. From theme selection to décor, entertainment, and catering, we take care of every detail to ensure the celebration is perfect. Whether it's a grand party or an intimate gathering, we tailor each event to suit the guest of honor, creating a day filled with joy, laughter, and cherished memories for all attendees.
          We ensure the party flows seamlessly, providing a stress-free experience for the host and guests alike. Our creative team works to bring your vision to life, from custom invitations to unique party favors. With entertainment tailored to all ages, we keep the atmosphere lively and engaging. Our dedicated staff ensures that every moment is captured, creating lasting memories. At the end of the day, our goal is to craft a birthday celebration that will be remembered and cherished for years to come.

          </p>
        </div>
        <h2 className="bpc">Concert</h2>
        <div className="content_pty6">
          <img src={concert} alt="" />
          <p>
          Planning a concert involves detailed coordination to ensure an unforgettable experience. From choosing the perfect venue to managing sound, lighting, and stage setups, our event management team handles every detail. We work with top artists and performers, ensuring they deliver a high-energy, engaging show. With strict attention to safety and crowd control, we guarantee a secure and enjoyable environment for attendees. Our team also manages ticketing, promotions, and audience interaction to make sure the concert is a smashing success. Trust us to bring your vision to life and create a night to remember!
          Our event management team ensures the concert runs smoothly from start to finish. We coordinate backstage operations, handle performer needs, and manage real-time adjustments during the show. With professional sound engineers and lighting technicians, the performance looks and sounds flawless. We also handle post-concert activities, from artist meet-and-greets to safe crowd dispersal.
          </p>
        </div>
        <h1 className="head1" >Some Celebrations</h1>
        <div className="content_pty7">
        <img src={celeb1} alt="" />
          <img src={celeb2} alt="" />
          <img src={celeb3} alt="" />
          <img src={celeb4} alt="" />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Party;
