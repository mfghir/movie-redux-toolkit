import React, { useEffect } from "react";
import styled from "styled-components";

import Movie from "../components/Movie";
import GameDetail from "../components/GameDetail";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion/dist/framer-motion";
import { fadeIn } from "../animation";
import {  getAsyncPopularMovies } from "../redux/reducers/popularSlice";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadGames());
    dispatch(getAsyncPopularMovies());
  }, []);
  // }, [dispatch]);

  const { popular, error, newMovies, upcoming, searched } = useSelector(
    (state) => state.popular
  );

  return (
    <MovieList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {/* 
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )} */}
        <h2>Upcoming Movies</h2>
        <Movies>
          {upcoming.map((movie) => (
            <Movie
              name={movie.name}
              released={movie.released}
              id={movie.id}
              image={movie.background_image}
              key={movie.id}
            />
          ))}
        </Movies>

        {error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <h2>Popular Movies</h2>
            <Movies>
              {popular.map((movie) => (
                <Movie
                  title={movie.title}
                  released={movie.year}
                  id={movie.id}
                  image={movie.image}
                  key={movie.id}
                  {...movie}
                />
              ))}
            </Movies>
          </>
        )}

        <h2>New Movies</h2>
        <Movies>
          {newMovies.map((movie) => (
            <Movie
              name={movie.name}
              released={movie.released}
              id={movie.id}
              image={movie.background_image}
              key={movie.id}
            />
          ))}
        </Movies>
      </AnimateSharedLayout>
    </MovieList>
  );
};

export default Home;

const MovieList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
