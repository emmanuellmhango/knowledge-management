import React, { useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { players } from "./players";
import IndividualPlayer from "./IndividualPlayer";
import Header from "./Header";

import "./styles.css";

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleButtonClick = (label) => {
    setSelectedButton(label);
  };

  console.log("setSelectedButton", setSelectedButton);

  return (
    <div className="container canvasStyle" id="canvas">
      <Xwrapper>
        <div className="container-data">
          <div className="row">
            <div className="button-wrapper"></div>
            <div className="button-wrapper">
              <IndividualPlayer
                player={players[0]}
                onClick={() => handleButtonClick("Environmental Officer")}
                emphasized={selectedButton === "Environmental Officer"}
              />
            </div>
            <div className="button-wrapper"></div>
          </div>
          <div className="row">
            <div className="button-wrapper">
              <IndividualPlayer
                player={players[1]}
                onClick={() => handleButtonClick("HSA")}
                emphasized={selectedButton === "HSA"}
              />
            </div>
            <div className="button-wrapper"></div>
            <div className="button-wrapper">
              <IndividualPlayer
                player={players[2]}
                onClick={() => handleButtonClick("Lab Technician")}
                emphasized={selectedButton === "Lab Technician"}
              />
            </div>
          </div>
          <div className="row">
            <div className="button-wrapper"></div>
            <div className="button-wrapper">
              <IndividualPlayer
                player={players[3]}
                onClick={() => handleButtonClick("IDSR Coordinator")}
                emphasized={selectedButton === "IDSR Coordinator"}
              />
            </div>
            <div className="button-wrapper"></div>
          </div>
          <div className="row">
            <div className="button-wrapper">
              <IndividualPlayer
                player={players[4]}
                onClick={() => handleButtonClick("Clinical Officer")}
                emphasized={selectedButton === "Clinical Officer"}
              />
            </div>
            <div className="button-wrapper"></div>
            <div className="button-wrapper">
              <IndividualPlayer
                player={players[5]}
                onClick={() => handleButtonClick("PHIM")}
                emphasized={selectedButton === "PHIM"}
              />
            </div>
          </div>
        </div>
      </Xwrapper>
    </div>
  );
};

export default Dashboard;
