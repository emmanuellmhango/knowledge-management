import React, { useState, useEffect } from "react";
import Xarrow, { useXarrow, xarrowPropsType, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import { players } from "./players";
import { verbs } from "./verbs";
import "./styles.css";

const IndividualPlayer = ({ player, onClick, emphasized, checkedVerbs }) => {
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

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [verbsList, setVerbsList] = useState(verbs);
  const [checkedVerbs, setCheckedVerbs] = useState([]);

  const handleVerbCheckboxChange = (verbName) => {
    if (checkedVerbs.includes(verbName)) {
      setCheckedVerbs((prevState) => prevState.filter((v) => v !== verbName));
      verbsList.forEach((v) => {
        if (v.name === verbName) {
          v.isChecked = false;
        }
      });
    } else {
      setCheckedVerbs((prevState) => [...prevState, verbName]);
      verbsList.forEach((v) => {
        if (v.name === verbName) {
          v.isChecked = true;
        }
      });
    }
  };

  const handleButtonClick = (label, id) => {
    setSelectedButton(label);
    setSelectedPlayerId(id);
  };

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", "#da61ff");
    }
  }, []);

  const openForm = (e) => {
    e.preventDefault();
    alert("Go to form");
  };

  return (
    <div className="container" id="canvas">
      <Xwrapper>
        <div className="container-data">
          <div className={selectedPlayerId ? "graph" : "graph-b"}>
            <div className="verbs-header-bar">
              <div className="header">
                <div className="verb-header">
                  <span className="verb color">Filter By</span>
                </div>
                <div className="header-actions">
                  {verbs &&
                    verbsList.map((verb, index) => (
                      <span className="verb" key={index}>
                        <input
                          type="checkbox"
                          id={verb.id}
                          name={verb.name}
                          value={verb.name}
                          checked={verb.isChecked}
                          onChange={() => handleVerbCheckboxChange(verb.name)}
                          className="checkbox-input"
                        />
                        {verb.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div className="graph-data">
              <div className="row">
                <div className="button-wrapper"> &nbsp; </div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[0]}
                    onClick={() =>
                      handleButtonClick(players[0].name, players[0].id)
                    }
                    emphasized={
                      selectedButton === players[0].name ||
                      players[0].roles.some((role) =>
                        checkedVerbs.includes(role)
                      )
                    }
                    onTouchStart={() =>
                      handleButtonClick(players[0].name, players[0].id)
                    }
                  />
                </div>
                <div className="button-wrapper"> &nbsp; </div>
              </div>
              <div className="row">
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[1]}
                    onClick={() =>
                      handleButtonClick(players[1].name, players[1].id)
                    }
                    emphasized={
                      selectedButton === players[1].name ||
                      players[1].roles.some((role) =>
                        checkedVerbs.includes(role)
                      )
                    }
                    onTouchStart={() =>
                      handleButtonClick(players[1].name, players[1].id)
                    }
                  />
                </div>
                <div className="button-wrapper"></div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[2]}
                    onClick={() =>
                      handleButtonClick(players[2].name, players[2].id)
                    }
                    emphasized={
                      selectedButton === players[2].name ||
                      players[2].roles.some((role) =>
                        checkedVerbs.includes(role)
                      )
                    }
                    onTouchStart={() =>
                      handleButtonClick(players[2].name, players[2].id)
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="button-wrapper"></div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[3]}
                    onClick={() =>
                      handleButtonClick(players[3].name, players[3].id)
                    }
                    emphasized={
                      selectedButton === players[3].name ||
                      players[3].roles.some((role) =>
                        checkedVerbs.includes(role)
                      )
                    }
                    onTouchStart={() =>
                      handleButtonClick(players[3].name, players[3].id)
                    }
                  />
                </div>
                <div className="button-wrapper"></div>
              </div>
              <div className="row">
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[4]}
                    onClick={() =>
                      handleButtonClick(players[4].name, players[4].id)
                    }
                    emphasized={
                      selectedButton === players[4].name ||
                      players[4].roles.some((role) =>
                        checkedVerbs.includes(role)
                      )
                    }
                    onTouchStart={() =>
                      handleButtonClick(players[4].name, players[4].id)
                    }
                  />
                </div>
                <div className="button-wrapper"></div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[5]}
                    onClick={() =>
                      handleButtonClick(players[5].name, players[5].id)
                    }
                    emphasized={
                      selectedButton === players[5].name ||
                      players[5].roles.some((role) =>
                        checkedVerbs.includes(role)
                      )
                    }
                    onTouchStart={() =>
                      handleButtonClick(players[5].name, players[5].id)
                    }
                  />
                </div>
              </div>
              {players.map((player) =>
                player.relationships.map((relationship, index) => {
                  const targetPlayer = players.find(
                    (p) => p.id === relationship
                  );
                  if (targetPlayer) {
                    return (
                      <Xarrow
                        key={index}
                        start={player.id}
                        end={targetPlayer.id}
                        strokeWidth={2}
                        headSize={0}
                        path="smooth"
                        color="#bfbfc1"
                        dashness={true}
                        showHead={false}
                        curveness={0.8}
                        className="xarrow"
                        animateDrawing={true}
                        tailSize={1}
                      />
                    );
                  }
                  return null;
                })
              )}

              {selectedPlayerId && (
                <>
                  {players.map((player) => {
                    if (player.id === selectedPlayerId) {
                      return player.relationships.map((relationship) => {
                        const targetPlayer = players.find(
                          (p) => p.id === relationship
                        );
                        if (targetPlayer) {
                          return (
                            <Xarrow
                              start={selectedPlayerId}
                              end={targetPlayer.id}
                              key={targetPlayer.id}
                              strokeWidth={3}
                              headSize={6}
                              path="smooth"
                              color="#bb1b1b"
                              dashness={false}
                              showHead={true}
                              curveness={0.8}
                              className="xarrow"
                              animateDrawing={true}
                              tailSize={1}
                            />
                          );
                        }
                        return null;
                      });
                    }
                    return null;
                  })}
                </>
              )}
            </div>
          </div>
          {selectedPlayerId && (
            <div className="player-description">
              <div className="description">
                {selectedPlayerId &&
                  players.map((player) => {
                    if (player.id === selectedPlayerId) {
                      return <p key={player.id}>{player.description}</p>;
                    }
                  })}
              </div>
              <div className="action">
                <button
                  className="action-button"
                  onClick={(event) => openForm(event)}
                >
                  Show Form
                </button>
              </div>
            </div>
          )}
        </div>
      </Xwrapper>
    </div>
  );
};

export default Dashboard;
