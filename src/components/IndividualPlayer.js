import React from "react";
import Draggable from "react-draggable";
import { useXarrow } from "react-xarrows";
import "./styles.css";

const IndividualPlayer = ({ player, onClick, emphasized }) => {
  const updateXarrow = useXarrow();

  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <button
        id={player.id}
        onClick={onClick}
        className={emphasized ? "player emphasized" : "player"}
      >
        {player.name}
      </button>
    </Draggable>
  );
};

export default IndividualPlayer;
