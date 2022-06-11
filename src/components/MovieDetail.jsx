import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion/dist/framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { smallImage } from "../util";

const MovieDetail = ({ pathId ,detail}) => {


  const navigate = useNavigate(); // usehistory

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/"); // usehistory
    }
  };

  // const getRating = () => {
  //   const stars = [];
  //   const rating = Math.floor(game.rating);

  //   for (let i = 1; i <= 5; i++) {
  //     if (i <= rating) {
  //       stars.push(<img alt="star" key={i} src={starFull} />);
  //     } else {
  //       stars.push(<img alt="star" key={i} src={starEmpty} />);
  //     }
  //   }

  //   return stars;
  // };


  return (
    <>
      {/* {!isLoading && ( */}
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={pathId}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathId}`}>
                {detail.fullTitle}
              </motion.h3>
              <p>Rating: {detail.imDbRating}</p>
            </div>

            <Info>
              {/* <h3>description:</h3> */}
              {/* <Platforms>
                {detail.posters.map((data) => (
                  <img
                    key={data.posters.imDbId}
                    src={data.posters.link}
                    alt={data.posters.title}
                  />
                ))}
              </Platforms> */}
            </Info>
          </Stats>

          <Media>
            <motion.img
              layoutId={`image ${pathId}`}
              src={detail.image}
              alt={detail.title}
            />
          </Media>

          <Description>
            <p>{detail.plot}</p>
          </Description>

          <div className="gallery">
            {/* {detail.posters.map((poster) => ( */}
              {/* <img */}
                {/* // src={smallImage(screen.image, 1280)}
                // key={detail.posters.imDbId}
                // src={detail.posters.link}
                // alt={detail.posters.title} */}
              {/* // /> */}
            {/* ))} */}
          </div>
        </Detail>
      </CardShadow>
      {/* )} */}
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
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
