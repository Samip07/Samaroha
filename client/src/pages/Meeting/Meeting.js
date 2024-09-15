import React from "react";
import { Navbar, MeetingMain, Footer } from "../../components";
import meeting from "../../assets/meeting.jpg";
import meet1 from "../../assets/meet1.jpg";
import meet2 from "../../assets/meet2.jpg";
import meet3 from "../../assets/meet3.jpg";
import meet4 from "../../assets/meet4.jpg";
import meet5 from "../../assets/meet5.jpg";
import offermeet from "../../assets/offermeet.jpeg";
import mvenue1 from "../../assets/mvenue1.jpg";
import mvenue2 from "../../assets/mvenue2.jpg";
import mvenue3 from "../../assets/mvenue3.jpg";
import mvenue4 from "../../assets/mvenue4.jpg";
import './Meeting.css'
const Meeting = () => {
  return (
    <>
      <Navbar />
      <div className="container_meet">
        <div className="content_meet1">
        <img src={meeting} alt="" />
        </div>
        <div className="content_meet2">
          <h1>“A goal without a plan is just a wish.” – Antoine de Saint-Exupéry

</h1>
        </div>
        <div className="content_meet3">
          <img src={meet1} alt="" />
          <p>
          At Samaroha, we understand that a successful meeting requires careful planning, attention to detail, and flawless execution. Whether you’re organizing a corporate conference, a board meeting, or an intimate team gathering, our dedicated event management team ensures that every aspect of your meeting is meticulously arranged. From venue selection and audiovisual setup to catering and logistics, we provide personalized solutions tailored to your specific needs. With our expertise and commitment, your meeting will run seamlessly, allowing you to focus on what matters most—connecting, collaborating, and achieving your goals.<br/>
          <br />We provide expert meeting planning services tailored to your business needs. From corporate conferences to small team meetings, our experienced team manages everything—venue selection, audiovisual setup, catering, and guest coordination—ensuring your event runs smoothly and professionally. Whether in-person, hybrid, or virtual, we deliver efficient, stress-free meetings that let you focus on achieving your goals.

          </p>
        </div>

        <h1 className="head1" >Some Meeting photographs</h1>
        <div className="content_meet4">
        
          
          <img src={meet2} alt="" />
          <img src={meet3} alt="" />
          <img src={meet4} alt="" />
          <img src={meet5} alt="" />


        </div>
        <div className="content_meet5">
          <h1>What we Offer</h1>
        </div>
        <div className="content_meet6">
          <img src={offermeet} alt="" />
          <p>
          For a limited time, we’re offering 10% off on all meeting packages. Whether it’s a small business gathering or a large corporate conference, our team will ensure every detail is taken care of. This offer includes:<br/><br/>

-Complimentary consultation with a dedicated event manager<br/>
-Free audiovisual setup for all meeting packages<br/>
-Discounted rates on venue rentals and catering services<br/>
-Special pricing for hybrid and virtual meeting options<br/>
-Plus, book within the next 30 days and receive a free coffee break for all attendees!<br/><br/>

Contact us today to schedule your consultation and make your next meeting a success.

          </p>
        </div>
        <h1 className="head1" >Some Beautiful Wedding Venue</h1>
        <div className="content_meet7">
        <img src={mvenue1} alt="" />
          <img src={mvenue2} alt="" />
          <img src={mvenue3} alt="" />
          <img src={mvenue4} alt="" />
        </div>
      </div>
      
    
      <Footer />
    </>
  );
};

export default Meeting;
