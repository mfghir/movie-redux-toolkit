import React, { useEffect } from "react";
import styled from "styled-components";

import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";

// import { loadGames } from "../actions/gamesAction";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion/dist/framer-motion";
import { fadeIn } from "../animation";

import {
  getAsyncPopularMovies,
  getAsyncPopularTvs,
  getAsyncUpcoming,
} from "../redux/reducers/moviesSlice";

const Home = () => {
  const location = useLocation();
  // const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(loadGames());
    dispatch(getAsyncPopularMovies());
    dispatch(getAsyncPopularTvs());
    dispatch(getAsyncUpcoming());
  }, [dispatch]);
  // }, [dispatch]);

  const { popularMovies, error, upcoming, popularTvs, searched } = useSelector(
    (state) => state.movies
  );

  return (
    <MovieList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {/* {pathId && <MovieDetail pathId={pathId} />} */}
        </AnimatePresence>
        {/* 
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
                  {upcoming.map((movie) => (
            <Movie
              title={movie.title}
              released={movie.year}
              id={movie.id}
              image={movie.image}
              key={movie.id}
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
              title={movie.title}
              released={movie.year}
              id={movie.id}
              image={movie.image}
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
              {popularMovies?.map((movie) => (
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
          {popularTvs.map((movie) => (
            <Movie
              title={movie.title}
              released={movie.year}
              id={movie.id}
              image={movie.image}
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
