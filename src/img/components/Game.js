import React from "react";
// styling and Animaion
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

import { smallImage } from "../util";

const Game = ({ name, released, id, image }) => {
  // load details
  const history = useHistory();

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "auto";

    dispatch(loadDetail(id));
  };
  //

  return (
    <StyledGame layoutId={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  cursor: pointer;
`;

export default Game;
