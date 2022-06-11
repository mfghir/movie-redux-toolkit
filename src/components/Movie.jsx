import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

import { useDispatch } from "react-redux";
// import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { popup } from "../animation";
import { smallImage } from "../util";

const Movie = ({ title, released, image, id }) => {
  
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    // dispatch(loadDetail(id));
  };

  // const stringPathId = id.toString();

  return (
    <StyledMovie
      layoutId={id}
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      {/* <Link to={`/Title/${process.env.REACT_APP_MOVIE_API}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`}> */}
      <Link to={`/${id}`}>
      <motion.h3 layoutId="title">{title}</motion.h3>
      <p>{released}</p>
      <motion.img layoutId="image" src={image} alt={title} />
      </Link>
    </StyledMovie>
  );
};

export default Movie;

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
