import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { fadeIn } from "../animation";

import styled from "styled-components";
import { FaFilm } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { getAsyncSearch } from "../redux/reducers/searchSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(getAsyncSearch({ searchInput: textInput }));
    setTextInput("");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo>
        <FaFilm />
        <h1>Movie Land</h1>
      </Logo>

      <form className="search">
        <input
          type="text"
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        />
        <button type="submit" onClick={submitSearch}>
          search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;

    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

    border-radius: 10px 0px 0px 10px;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;

    cursor: pointer;
    color: white;
    background: #ff7676;

    border-radius: 0px 10px 10px 0px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  svg {
    font-size: 28px;
    margin-right: 10px;
  }
`;
