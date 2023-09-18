import React from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import "./styles.css";

const IndividualPlayer = ({ player, onClick, emphasized }) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={player.id}>
        <button
          onClick={onClick}
          className={emphasized ? "player emphasized" : "player"}
        >
          {player.name}
        </button>
      </div>
    </Draggable>
  );
};

export default IndividualPlayer;
