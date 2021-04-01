import React from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
// images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  //exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // get stars

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  // get paltform

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PC":
        return steam;
      case "Xbox One":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
                <h1>{game.name}</h1>
            
            <Stats>
              <div className="rating">
                <p>Rating: {game.rating}</p>
                <br/>
                {getStars()}
              </div>
              <Info>
                <h3>Platform</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="image" />
            </Media>
            <Description>
               <h1>Details</h1>
               <br />
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallary">
            <h1>Screenshots</h1>
               <br />
              {screen.data.results.map((screen) => (
                <img key={screen.id} src={screen.image} alt="screenshot" />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  display:flex;
  justify-content:center;
  align-items: center;
`;

const Detail = styled(motion.div)`
  
  width: 80vw;
  height: 90vh;
  padding: 2rem 5rem;
    
  border-radius: 1rem;
  
  background: white;
  position: absolute;
  
  
  color: black;
  overflow-y:scroll;
  overflow-x:hidden;
  h1{
    margin: 0.5rem 0
  }
  img {
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }

  
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  align-self: center;
   flex-flow: row wrap;

p{
  padding-top: 2rem ;
}
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  
`;

const Info = styled(motion.div)`
  text-align: left;
`;
const Platforms = styled(motion.div)`
  display: flex;
  
  justify-content: space-evenly;
  img {
    margin-right: 2rem;
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




export default GameDetail;
