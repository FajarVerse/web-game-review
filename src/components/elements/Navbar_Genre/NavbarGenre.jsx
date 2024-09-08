import "../../../style/pageStyle/reviews.css";
import GenreBtn from "./GenreBtn";

const NavbarGenre = (props) => {
  const { onSelectGenre } = props;

  return (
    <>
      <nav className="nav genre-nav">
        <GenreBtn onSelectGenre={() => onSelectGenre("")}>All</GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("action")}>
          Action
        </GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("indie")}>Indie</GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("adventure")}>
          Adventure
        </GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("role-playing-games-rpg")}>
          RPG
        </GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("strategy")}>
          Strategy
        </GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("shooter")}>FPS</GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("fighting")}>
          Fighting
        </GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("racing")}>
          Racing
        </GenreBtn>
        <GenreBtn onSelectGenre={() => onSelectGenre("sports")}>
          Sports
        </GenreBtn>
      </nav>
    </>
  );
};

export default NavbarGenre;
