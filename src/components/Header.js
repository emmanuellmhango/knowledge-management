import React from "react";

function Header({ isChecked, handleOnChange }) {
  return (
    <div className="header">
      <span className="verb emphasized">Filter By:</span>
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
        />
        Provide
      </span>
    </div>
  );
}

export default Header;
