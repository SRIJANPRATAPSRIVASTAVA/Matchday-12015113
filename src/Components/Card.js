import crown from "../IMAGES/crown.png";
import flag from "../IMAGES/Flag_of_India.svg";
import verses from "../IMAGES/logo_white.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const capitalizename = (name) => {
  const words = name.split(" ");
  const newname = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
  return newname;
};

const Card = ({ match }) => {

  let navigate = useNavigate();
  const routeChange = (e) => {
    let path = e;
    navigate(path);
  };

  const handle = () => {
    routeChange('/screentwo')
  };

  const winner = match.winner;
  const { a1, a2, a3, b1, b2, b3 } = match;
  return (
    <>
      <div className="fixture" onClick={handle}>
        <div className="name">
          <h1>{match.tournament[0].name}</h1>
          <h3>{match.round}</h3>
        </div>
        <div className="players">
          <div className="player one">
            <div
              id="one"
              className="crown"
              style={
                winner === match.team1[0].name
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <img src={crown} alt="" />
            </div>
            <div className="country">
              <img src={flag} alt="" />
            </div>
            <h3>{capitalizename(match.team1[0].name)}</h3>
          </div>
          <div className="verses">
            <div className="scorecard">
              <h3>v/s</h3>
              <div className="score">
                {a1}-{b1} , {a2}-{b2} , {a3}-{b3}
              </div>
            </div>
            <img src={verses} alt="" />
          </div>
          <div className="player two">
            <div
              id="one"
              className="crown"
              style={
                winner === match.team2[0].name
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <img src={crown} alt="" />
            </div>
            <div className="country">
              <img src={flag} alt="" />
            </div>
            <h3>{capitalizename(match.team2[0].name)}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
