import React, { useState } from "react";

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="header">
      <div className="verb-header">
        <span className="verb">Filter By</span>
      </div>
      <div className="header-actions">
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Provide"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Provide
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Enforce"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Enforce
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Screen Patients"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Screen Patients
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Fill"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Fill
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Collect"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Collect
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Record"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Record
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Screen"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Screen
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Ask"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Ask
        </span>
        <span className="verb">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Provide"
            checked={isChecked}
            onChange={handleOnChange}
            className="checkbox-input"
          />
          Provide
        </span>
      </div>
    </div>
  );
}

export default Header;
