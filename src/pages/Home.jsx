import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";
import { useDispatch, useSelector } from "react-redux";

import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion/dist/framer-motion";
import { fadeIn } from "../animation";

import { getAsyncPopularMovies } from "../redux/reducers/popularMoviesSlice";
import { getAsyncPopularTvs } from "../redux/reducers/tvSlice";
import { getAsyncUpcoming } from "../redux/reducers/upcomingSlice";

import { getAsyncDetail } from "../redux/reducers/detailSlice";
import { getAsyncSearch } from "../redux/reducers/searchSlice";

const Home = () => {
  const [limit, setLimit] = useState(9);
  const dispatch = useDispatch();

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getAsyncPopularMovies());
    dispatch(getAsyncPopularTvs());
    dispatch(getAsyncUpcoming());
    dispatch(getAsyncSearch());

    dispatch(getAsyncDetail({ id: pathId }));
  }, [dispatch,pathId]);

  const { popularMovies } = useSelector((state) => state.popularMovies);
  const { upcoming } = useSelector((state) => state.upcoming);
  const { popularTvs } = useSelector((state) => state.popularTvs);

  const { search } = useSelector((state) => state.search);

  return (
    <MovieList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <MovieDetail pathId={pathId} /> &&
            console.log("pathId:", pathId)}
        </AnimatePresence>

        {search.length ? (
          <div className="searched">
            <h2>Searched Movies</h2>
            <Movies>
              {search.map((movie) => (
                <Movie
                  title={movie.title}
                  released={movie.year}
                  id={movie.id}
                  image={movie.image}
                  key={movie.id}
                />
              ))}
            </Movies>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Movies</h2>
        <Movies>
          {upcoming.slice(0, limit ? limit : upcoming.length).map((movie) => (
            <Movie
              title={movie.title}
              released={movie.year}
              id={movie.id}
              image={movie.image}
              key={movie.id}
              // onClick={()=>dispatch(getAsyncDetail({id: movie.id}))}
            />
          ))}
        </Movies>

        <h2>Popular Movies</h2>
        <Movies>
          {popularMovies
            .slice(0, limit ? limit : popularMovies.length)
            .map((movie) => (
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

        <h2>New Movies</h2>
        <Movies>
          {popularTvs
            .slice(0, limit ? limit : popularMovies.length)
            .map((movie) => (
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
  padding: 0rem 5rem 5rem 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
