import { useEffect, useState } from "react";
import {
  getDetailGame,
  getScreenshotGame,
} from "../../services/detailgame.service";
import { useParams } from "react-router-dom";
import DetailGame from "./DetailGame";
import { Smile } from "react-feather";
import { Frown } from "react-feather";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Link2 } from "react-feather";
const DetailGameFragment = () => {
  const { id } = useParams();
  const [detailGame, setDetailGame] = useState({});
  const [gameImg, setGameImg] = useState([]);

  useEffect(() => {
    getDetailGame(id, (data) => {
      setDetailGame(data);
    });
  }, [id]);

  useEffect(() => {
    getScreenshotGame(id, (data) => {
      setGameImg(data.results);
    });
  }, [id]);

  console.log(detailGame);
  console.log(gameImg);

  return (
    <>
      <DetailGame>
        <DetailGame.Top img={detailGame.background_image}>
          {detailGame.name}
        </DetailGame.Top>
        <div className="body">
          <DetailGame.BodyLeft
            img={
              gameImg &&
              gameImg.slice(0, 2).map((img) => (
                <div className="border" key={img.id}>
                  <img src={img.image} />{" "}
                </div>
              ))
            }
            rating={detailGame.rating}
            ratingGood={
              detailGame.ratings &&
              detailGame.ratings.map((rating) => {
                if (rating.percent > 40) {
                  return (
                    <li key={rating.id}>
                      <Smile width={17} height={17} />
                      <span>{rating.title}</span>
                    </li>
                  );
                }
              })
            }
            ratingBad={
              detailGame.ratings &&
              detailGame.ratings.map((rating) => {
                if (rating.percent < 40) {
                  return (
                    <li key={rating.id}>
                      <Frown width={17} height={17} />
                      <span>{rating.title}</span>
                    </li>
                  );
                }
              })
            }
          >
            {detailGame.description_raw}
          </DetailGame.BodyLeft>
          <DetailGame.BodyRight
            date={
              detailGame?.updated !== undefined
                ? format(new Date(detailGame.updated), "dd MMMM yyyy, HH:mm")
                : "0"
            }
            tag={
              detailGame.tags &&
              detailGame.tags
                .slice(0, 5)
                .map((tag) => <li key={tag.id}>{tag.name}</li>)
            }
          />
        </div>

        <DetailGame.Bottom
          gameName={detailGame.name}
          publishers={
            detailGame.publishers &&
            detailGame.publishers.map((publis) => {
              return publis.name;
            })
          }
          released={detailGame.released}
          genre={
            detailGame.genres &&
            detailGame.genres.map((genre) => {
              return `${genre.name}, `;
            })
          }
          added={
            detailGame.added_by_status?.owned !== undefined
              ? detailGame.added_by_status.owned
              : "not data"
          }
          link={
            detailGame.stores &&
            detailGame.stores.map((store) => (
              <Link to={`https://${store.store.domain}`} key={store.id}>
                <div className={`btn ${store.store.slug}`}>
                  <Link2 width={15} height={15} />
                  <span>{store.store.name}</span>
                </div>
              </Link>
            ))
          }
        />
      </DetailGame>
    </>
  );
};

export default DetailGameFragment;
