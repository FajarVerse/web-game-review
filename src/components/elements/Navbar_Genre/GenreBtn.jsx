import "../../../style/pageStyle/reviews.css";

const GenreBtn = (props) => {
  const { onSelectGenre, children } = props;

  return (
    <>
      <a href="#" onClick={onSelectGenre}>
        <span>{children}</span>
      </a>
    </>
  );
};

export default GenreBtn;
