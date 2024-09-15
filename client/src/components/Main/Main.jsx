import React, { useEffect } from "react";
import "./Main.css";
import img1Lazy from "../../assets/digital-lazy.jpg";
import img2Lazy from "../../assets/grow-lazy.jpg";
import img3Lazy from "../../assets/card-lazy.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img3.png";
import img3 from "../../assets/img2.png";
import user1 from "../../assets/user-1.jpg";
import user2 from "../../assets/user-2.jpg";
import user3 from "../../assets/user-3.jpg";

const Main = () => {
  useEffect(() => {
    const imgTargets = document.querySelectorAll("img[data-src]");

    const loadImg = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      // Replace src with data-src ---1
      // entry.target.removeAttribute("src");
      // entry.target.setAttribute("src", `${entry.target.dataset.src}`);

      // Replace src with data-src ---2
      entry.target.src = entry.target.dataset.src;

      // only removing class after loading image
      entry.target.addEventListener("load", () =>
        entry.target.classList.remove("lazy-img")
      );

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "200px",
    });

    imgTargets.forEach((img) => {
      imgObserver.observe(img);
    });

    // For section 2
    const tabs = document.querySelectorAll(".operations__tab");
    const tabsContainer = document.querySelector(".operations__tab-container");
    const tabsContent = document.querySelectorAll(".operations__content");

    tabsContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".operations__tab");

      // Guard clause
      if (!clicked) return;

      // Remove active classes
      tabs.forEach((t) => t.classList.remove("operations__tab--active"));
      tabsContent.forEach((c) =>
        c.classList.remove("operations__content--active")
      );

      // Active Tab
      clicked.classList.add("operations__tab--active");

      // Activate content area
      document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
    });

    // SLider
    const slider = function () {
      const slides = document.querySelectorAll(".slide");
      const btnLeft = document.querySelector(".slider__btn--left");
      const btnRight = document.querySelector(".slider__btn--right");
      const dotContainer = document.querySelector(".dots");

      let curSlide = 0;
      const maxSlide = slides.length;

      // *******************
      // Functions
      const createDots = function () {
        slides.forEach((_, i) => {
          dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
      };

      const activateDot = function (slide) {
        document
          .querySelectorAll(".dots__dot")
          .forEach((dot) => dot.classList.remove("dots__dot--active"));

        document
          .querySelector(`.dots__dot[data-slide="${slide}"]`)
          .classList.add("dots__dot--active");
      };

      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      };

      // Next Slide
      const nextSlide = function (e) {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;

        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const prevSlide = function () {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;

        goToSlide(curSlide);
        activateDot(curSlide);
      };

      const init = function () {
        goToSlide(0);
        createDots();
        activateDot(0);
      };
      init();

      // *******************
      // Event Handlers
      btnRight.addEventListener("click", nextSlide);

      btnLeft.addEventListener("click", prevSlide);

      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") nextSlide();
        e.key === "ArrowLeft" && prevSlide();
      });

      dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("dots__dot")) {
          const { slide } = e.target.dataset;
          goToSlide(slide);
          activateDot(slide);
        }
      });
    };
    slider();
  }, []);
  return (
    <>
      <div className="containers">
        <section className="section" id="section--1">
          <div className="section__title">
            <h2 className="section__description">Features</h2>
            <h3 className="section__header">
              Planning, Organizing and Executing events digitally.
            </h3>
          </div>

          <div className="features">
            <img
              src={img1Lazy}
              data-src={img1}
              alt="Computer"
              className="features__img lazy-img"
            />
            <div className="features__feature">
              <h5 className="features__header">Weddings</h5>
              <p>
              At Samaroha, we believe that your wedding day should be nothing short of magical. Our experienced event planning team is dedicated to making your dream wedding a reality, handling every detail from venue selection and décor to entertainment, catering, and logistics. Whether you envision an intimate ceremony or a grand celebration, we work closely with you to ensure every aspect of your special day reflects your unique love story. With our expert coordination and personalized approach, you can relax and enjoy every moment, knowing that your wedding is in the best hands.
              </p>
            </div>

            <div className="features__feature">
              <h5 className="features__header">Meetings</h5>
              <p>
              At Samaroha, we understand that a successful meeting requires careful planning, attention to detail, and flawless execution. Whether you’re organizing a corporate conference, a board meeting, or an intimate team gathering, our dedicated event management team ensures that every aspect of your meeting is meticulously arranged. From venue selection and audiovisual setup to catering and logistics, we provide personalized solutions tailored to your specific needs. With our expertise and commitment, your meeting will run seamlessly, allowing you to focus on what matters most—connecting, collaborating, and achieving your goals.


              </p>
            </div>
            <img
              src={img2Lazy}
              data-src={img2}
              alt="Plant"
              className="features__img lazy-img"
            />

            <img
              src={img3Lazy}
              data-src={img3}
              alt="Credit card"
              className="features__img lazy-img"
            />
            <div className="features__feature">
              <h5 className="features__header">Birthday and Parties</h5>
              <p>
              At Samaroha, we turn birthdays into unforgettable celebrations. Whether it’s an intimate gathering with close family or a large, extravagant party, our event management team is here to make your vision come to life. From creative themes and personalized decorations to entertainment, catering, and venue selection, we handle every detail to ensure a seamless and memorable experience. No matter the age or style of the party, we’ll craft a celebration that’s perfectly suited to your taste and leaves a lasting impression on you and your guests.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="section--2">
          <div className="section__title">
            <h2 className="section__description">Operations</h2>
            <h3 className="section__header">
              Everything as simple as possible, but no simpler.
            </h3>
          </div>

          <div className="operations">
            <div className="operations__tab-container">
              <button
                className="btn operations__tab operations__tab--1 operations__tab--active"
                data-tab="1"
              >
                <span>01</span>Instant Transfers
              </button>
              <button
                className="btn operations__tab operations__tab--2"
                data-tab="2"
              >
                <span>02</span>Instant Loans
              </button>
              <button
                className="btn operations__tab operations__tab--3"
                data-tab="3"
              >
                <span>03</span>Instant Closing
              </button>
            </div>
            <div className="operations__content operations__content--1 operations__content--active">
              <h5 className="operations__header">
                Tranfser money to anyone, instantly! No fees, no BS.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="operations__content operations__content--2">
              <h5 className="operations__header">
                Buy a home or make your dreams come true, with instant loans.
              </h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="operations__content operations__content--3">
              <h5 className="operations__header">
                No longer need your account? No problem! Close it instantly.
              </h5>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="section--3">
          <div className="section__title section__title--testimonials">
            <h2 className="section__description">Not sure yet?</h2>
            <h3 className="section__header">
              Millions of Bankists are already making their lifes simpler.
            </h3>
          </div>

          <div className="slider">
            <div className="slide slide--1">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  Best financial decision ever!
                </h5>
                <blockquote className="testimonial__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium quas quisquam non? Quas voluptate nulla minima
                  deleniti optio ullam nesciunt, numquam corporis et asperiores
                  laboriosam sunt, praesentium suscipit blanditiis.
                  Necessitatibus id alias reiciendis, perferendis facere
                  pariatur dolore veniam autem esse non voluptatem saepe
                  provident nihil molestiae.
                </blockquote>
                <address className="testimonial__author">
                  <img src={user1} alt="" className="testimonial__photo" />
                  <h6 className="testimonial__name">Aarav Lynn</h6>
                  <p className="testimonial__location">San Francisco, USA</p>
                </address>
              </div>
            </div>

            <div className="slide slide--2">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  The last step to becoming a complete minimalist
                </h5>
                <blockquote className="testimonial__text">
                  Quisquam itaque deserunt ullam, quia ea repellendus provident,
                  ducimus neque ipsam modi voluptatibus doloremque, corrupti
                  laborum. Incidunt numquam perferendis veritatis neque
                  repellendus. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Illo deserunt exercitationem deleniti.
                </blockquote>
                <address className="testimonial__author">
                  <img src={user2} alt="" className="testimonial__photo" />
                  <h6 className="testimonial__name">Miyah Miles</h6>
                  <p className="testimonial__location">London, UK</p>
                </address>
              </div>
            </div>

            <div className="slide slide--3">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  Finally free from old-school banks
                </h5>
                <blockquote className="testimonial__text">
                  Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                  incidunt commodi architecto numquam omnis nulla autem,
                  necessitatibus blanditiis modi similique quidem. Odio aliquam
                  culpa dicta beatae quod maiores ipsa minus consequatur error
                  sunt, deleniti saepe aliquid quos inventore sequi.
                  Necessitatibus id alias reiciendis, perferendis facere.
                </blockquote>
                <address className="testimonial__author">
                  <img src={user3} alt="" className="testimonial__photo" />
                  <h6 className="testimonial__name">Francisco Gomes</h6>
                  <p className="testimonial__location">Lisbon, Portugal</p>
                </address>
              </div>
            </div>

            <button className="slider__btn slider__btn--left">&larr;</button>
            <button className="slider__btn slider__btn--right">&rarr;</button>
            <div className="dots"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
