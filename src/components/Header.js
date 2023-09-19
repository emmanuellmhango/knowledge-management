import React, { useState } from "react";
import { verbs } from "./verbs";

function Header() {
  const [verbsList, setVerbsList] = useState(verbs);

  const handleOnChange = (index) => {
    const updatedVerbs = [...verbsList];
    updatedVerbs[index].isChecked = !updatedVerbs[index].isChecked;
    setVerbsList(updatedVerbs);
  };

  return (
    <div className="header">
      <div className="verb-header">
        <span className="verb">Filter By</span>
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
                onChange={() => handleOnChange(index)}
                className="checkbox-input"
              />
              {verb.name}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Header;
