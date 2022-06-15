import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";
import { popup } from "../animation";
import { useDispatch } from "react-redux";

import { getAsyncDetail } from "../redux/reducers/detailSlice";

const Movie = ({ title, released, image, id }) => {

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(getAsyncDetail({id}));
  };


  return (
    <StyledMovie
      layoutId={id}
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
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

  background: #ffffff;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
