import { useEffect, useState } from "react";
import { getGameList, getGenreGameList } from "../../services/gamelist.service";
import "../../style/pageStyle/reviews.css";
import NavbarGenre from "../elements/Navbar_Genre/NavbarGenre";
import GameCard from "./GameCard";

const Reviews = () => {
  const [listGame, setListGame] = useState([]);
  const [gameResults, setGameResult] = useState([]);
  const [genreGame, setGenreGame] = useState("");

  // genre game
  useEffect(() => {
    getGenreGameList(genreGame, (data) => {
      setGameResult(data.results);
    });
  }, [genreGame]);

  // List Game
  useEffect(() => {
    getGameList((data) => {
      setListGame(data.results);
    });
  }, []);

  console.log(listGame);

  return (
    <>
      <div className="row-content">
        <NavbarGenre onSelectGenre={setGenreGame} />
        <div className="card-row">
          {genreGame === ""
            ? listGame.map((game) => (
                <GameCard key={game.id} id={game.id}>
                  <GameCard.Header
                    img={game.background_image}
                    alt={game.background_image}
                  />
                  <GameCard.Footer rating={game.rating}>
                    {game.name}
                  </GameCard.Footer>
                </GameCard>
              ))
            : gameResults.map((game) => (
                <GameCard key={game.id} id={game.id}>
                  <GameCard.Header
                    img={game.background_image}
                    alt={game.background_image}
                  />
                  <GameCard.Footer rating={game.rating}>
                    {game.name}
                  </GameCard.Footer>
                </GameCard>
              ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
