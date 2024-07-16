import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <section className="upfooter">
        <div className="part">
          <div className="leftpart">
            <h2 className="main-logo footer-logo">Samaroha</h2>
          </div>

          <div className="centerpart">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/destination">Destinations</a>
              </li>
              <li>
                <a href="/stay">View Hotels</a>
              </li>
              <li>
                <a href="/trek">Trekking Routes</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          <div className="rightpart">
            <h3>About Us</h3>
            Phone:9800000000
            <br />
            Email:samaroha@gmail.com
            <br />
            Insta:@Samaroha
          </div>
        </div>
      </section>
      <footer>
        <div className="footerlast">
          &#169; Copyright|All Right Reserved&#8482;
        </div>
      </footer>
    </div>
  );
}

export default Footer;
