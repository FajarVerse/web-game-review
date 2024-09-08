import NavBar from "../components/layout/NavBar.jsx";
import AuthLayouts from "../components/layout/AuthLayouts.jsx";
import "../style/pageStyle/about.css";
import { useState, useEffect, useRef } from "react";
import AboutSlide from "../components/fragments/AboutSlide.jsx";
import { Fragment } from "react";

const AboutPage = () => {
  const [aboutSlide, setAboutSlide] = useState([]);

  const SlideRef = useRef(null);

  useEffect(() => {
    const slide = SlideRef.current.querySelectorAll(".slide");

    setAboutSlide(Array.from(slide));
  }, []);

  const handleNext = () => {
    SlideRef.current.appendChild(aboutSlide[0]);
    setAboutSlide(SlideRef.current.querySelectorAll(".slide"));
    console.log(aboutSlide[0]);
  };

  // const handlePrev = () => {
  //   SlideRef.current.prepend(aboutSlide[aboutSlide.length - 1]);
  //   setAboutSlide(SlideRef.current.querySelectorAll(".slide"));
  // };

  setInterval(handleNext, 3500);

  return (
    <Fragment>
      <NavBar />
      <AuthLayouts className="about" classNameMain="about-content">
        <div className="about-slide" ref={SlideRef}>
          <AboutSlide
            spanText="Start Your Gaming"
            headerText="Journey with Us"
            slideIndexClass="slide-1"
          >
            What are you waiting for? Come explore our website and find your
            dream game. With thousands of reviews available, we are ready to
            help you find the game that best suits your tastes and needs.
          </AboutSlide>

          <AboutSlide
            spanText="Welcome to"
            headerText="QuesForGame"
            slideIndexClass="slide-2"
          >
            A trusted source for game reviews that helps you find and buy the
            right game.With various reviews from the latest games to classics,
            we ensure you get complete information to maximize your gaming
            experience.
          </AboutSlide>

          <AboutSlide
            spanText="The"
            headerText="Vision & Mission"
            slideIndexClass="slide-3"
          >
            Becoming the main destination for gamers who are looking for trusted
            guidance to choose games that suit their preferences. and Mission:
            We are committed to providing objective, high-quality reviews that
            not only provide detailed information but also help gamers make
            informed decisions before purchasing a game.
          </AboutSlide>

          <AboutSlide
            spanText="How We"
            headerText="Review Games"
            slideIndexClass="slide-4"
          >
            We select games based on popularity, ratings, and the latest data
            available from the RAWG API. With this resource, we ensure that the
            games reviewed are the most relevant and interesting to the gamer
            community.
          </AboutSlide>

          <AboutSlide
            spanText="Join to"
            headerText="Community"
            slideIndexClass="slide-5"
          >
            Apart from reading reviews, you can also write your own reviews. By
            sharing your experiences and insights, you help other gamers make
            better decisions when choosing their next game.
          </AboutSlide>

          <AboutSlide
            spanText="Top"
            headerText="Picks"
            slideIndexClass="slide-6"
          >
            Check out the best games we recommend based on the latest reviews
            and trends in the gamer community. Find the must-play titles and
            don't miss out on the excitement of these games
          </AboutSlide>
        </div>
      </AuthLayouts>
    </Fragment>
  );
};

export default AboutPage;
