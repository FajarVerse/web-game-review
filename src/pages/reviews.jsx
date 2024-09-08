import AuthLayouts from "../components/layout/AuthLayouts";
import NavBar from "../components/layout/NavBar";
import Reviews from "../components/fragments/Reviews";
import { Fragment } from "react";

const ReviewsPage = () => {
  return (
    <Fragment>
      <NavBar />
      <AuthLayouts className="reviews" classNameMain="reviews-content">
        <Reviews />
      </AuthLayouts>
    </Fragment>
  );
};

export default ReviewsPage;
