// import Description from "../components/elements/Description";
// import Headers from "../components/elements/Headers";
// import SubHeaders from "../components/elements/SubHeaders";
import { Fragment } from "react";
import Home from "../components/fragments/Home";
import AuthLayouts from "../components/layout/AuthLayouts";
import NavBar from "../components/layout/NavBar";
import "../style/layout.css";
import "../style/pageStyle/home.css";

const HomePage = () => {
  return (
    <Fragment>
      <NavBar />
      <AuthLayouts classNameSection="home" classNameMain="home-content">
        <Home />
      </AuthLayouts>
    </Fragment>
  );
};

export default HomePage;
