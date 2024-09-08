import NavBar from "../components/layout/NavBar";
import DetailGameFragment from "../components/fragments/DetailGameFragment";
import { Fragment } from "react";
const DetailGame = () => {
  return (
    <Fragment>
      <NavBar />
      <DetailGameFragment />
    </Fragment>
  );
};

export default DetailGame;
