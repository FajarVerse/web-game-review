import Description from "../elements/Description";
import Headers from "../elements/Headers";
import "../../style/pageStyle/about.css";

const AboutSlide = (props) => {
  const { spanText, headerText, children, slideIndexClass } = props;

  return (
    <div className={`slide ${slideIndexClass}`}>
      <div className="slide-content">
        <Headers className="about-title">
          <span>{spanText}</span> {headerText}{" "}
        </Headers>
        <Description className="about-description">{children}</Description>
      </div>
    </div>
  );
};

export default AboutSlide;
