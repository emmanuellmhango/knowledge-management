// Home.jsx
import React, { useState } from "react";
import { useXarrow } from "react-xarrows";
import Draggable from "react-draggable";
import ButtonComponent from "./IndividualPlayer";
import Header from "./Header";
import "./styles.css";

const DraggableBox = ({ box }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={box.id} className="boxStyle">
        {box.id}
      </div>
    </Draggable>
  );
};

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleButtonClick = (label) => {
    setSelectedButton(label);
  };

  return (
    <div className="container canvasStyle" id="canvas">
      <Header isChecked={isChecked} handleOnChange={handleOnChange} />
      <div className="container-data">
        <div className="row">
          <div className="button-wrapper"></div>
          <div className="button-wrapper">
            <ButtonComponent
              label="Environmental Officer"
              onClick={() => handleButtonClick("Environmental Officer")}
              emphasized={selectedButton === "Environmental Officer"}
            />
          </div>
          <div className="button-wrapper"></div>
        </div>
        <div className="row">
          <div className="button-wrapper">
            <ButtonComponent
              label="HSA"
              onClick={() => handleButtonClick("HSA")}
              emphasized={selectedButton === "HSA"}
            />
          </div>
          <div className="button-wrapper">
            <ButtonComponent
              label="IDSR Coordinator"
              onClick={() => handleButtonClick("IDSR Coordinator")}
              emphasized={selectedButton === "IDSR Coordinator"}
            />
          </div>
          <div className="button-wrapper">
            <ButtonComponent
              label="Lab Technician"
              onClick={() => handleButtonClick("Lab Technician")}
              emphasized={selectedButton === "Lab Technician"}
            />
          </div>
        </div>
        <div className="row">
          <div className="button-wrapper">
            <ButtonComponent
              label="Clinical Officer"
              onClick={() => handleButtonClick("Clinical Officer")}
              emphasized={selectedButton === "Clinical Officer"}
            />
          </div>
          <div className="button-wrapper"></div>
          <div className="button-wrapper">
            <ButtonComponent
              label="PHIM"
              onClick={() => handleButtonClick("PHIM")}
              emphasized={selectedButton === "PHIM"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
