import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FaGrinAlt,
  FaUsers,
  FaVideo,
  FaClock,
  FaStar,
  FaRegStar,
} from "react-icons/fa";

const MovieDetail = ({ pathId }) => {
  const { detail } = useSelector((state) => state.detail);
  const navigate = useNavigate();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/"); 
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = detail.imDbRating;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar />);
      } else {
        stars.push(<FaRegStar />);
      }
    }

    return stars;
  };

  return (
    <>
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={pathId}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathId}`}>
                {detail.fullTitle}
              </motion.h3>
            </div>

            <Info>
              <p>{detail.imDbRating}</p>
              {getStars()}
            </Info>
          </Stats>

          <Poster>
            <motion.img
              layoutId={`image ${pathId}`}
              src={detail.image}
              alt={detail.title}
            />
          </Poster>

          <Description>
            <span>
              <FaGrinAlt /> Genres: {detail.genres}
            </span>
            <span>
              <FaVideo /> Director: {detail.directors}
            </span>
            <span>
              <FaUsers /> Casts: {detail.stars}
            </span>
            <span>
              <FaClock /> {detail.runtimeStr}
            </span>
            <p>{detail.plot}</p>
          </Description>
        </Detail>
      </CardShadow>
    </>
  );
};

export default MovieDetail;

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;

  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;

  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;

  background: white;
  position: absolute;
  left: 10%;

  color: black;
  z-index: 10;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 3rem 0;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Info = styled(motion.div)`
  text-align: center;
  svg {
    fill: #ff7676;
  }
`;

const Poster = styled(motion.div)`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  width: 50%;

  img {
    width: 80%;
  }
`;

const Description = styled(motion.div)`
  margin-top: 5rem;
  width: 50%;

  span {
    display: flex;
    margin: 20px 0;
    align-items: center;

    svg {
      margin-right: 10px;
      font-size: 20px;
    }

    p{
      margin-top: 40px;
    }
  }
`;
