import React, { useState, useEffect } from "react";
import Xarrow, { useXarrow, xarrowPropsType, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import { players } from "./players";
import Header from "./Header";
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

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

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
              <Header />
            </div>
            <div className="graph-data">
              <div className="row">
                <div className="button-wrapper"> &nbsp; </div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[0]}
                    onClick={() =>
                      handleButtonClick("Environmental Officer", players[0].id)
                    }
                    onTouchStart={() =>
                      handleButtonClick("Environmental Officer", players[0].id)
                    }
                    emphasized={selectedButton === "Environmental Officer"}
                  />
                </div>
                <div className="button-wrapper"> &nbsp; </div>
              </div>
              <div className="row">
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[1]}
                    onClick={() => handleButtonClick("HSA", players[1].id)}
                    onTouchStart={() =>
                      handleButtonClick("Environmental Officer", players[0].id)
                    }
                    emphasized={selectedButton === "HSA"}
                  />
                </div>
                <div className="button-wrapper"></div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[2]}
                    onClick={() =>
                      handleButtonClick("Lab Technician", players[2].id)
                    }
                    onTouchStart={() =>
                      handleButtonClick("Environmental Officer", players[0].id)
                    }
                    emphasized={selectedButton === "Lab Technician"}
                  />
                </div>
              </div>
              <div className="row">
                <div className="button-wrapper"></div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[3]}
                    onClick={() =>
                      handleButtonClick("IDSR Coordinator", players[3].id)
                    }
                    emphasized={selectedButton === "IDSR Coordinator"}
                    icon={"MdAccountTree"}
                  />
                </div>
                <div className="button-wrapper"></div>
              </div>
              <div className="row">
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[4]}
                    onClick={() =>
                      handleButtonClick("Clinical Officer", players[4].id)
                    }
                    emphasized={selectedButton === "Clinical Officer"}
                  />
                </div>
                <div className="button-wrapper"></div>
                <div className="button-wrapper">
                  <IndividualPlayer
                    player={players[5]}
                    onClick={() => handleButtonClick("PHIM", players[5].id)}
                    emphasized={selectedButton === "PHIM"}
                    icon={"MdAccountBalance"}
                  />
                </div>
              </div>
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
                              color="#e3b3b3"
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
