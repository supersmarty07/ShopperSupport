import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  const [itemId, setItemId] = useState("");
  const idChangeHandler = (event) => {
    setItemId(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const newData = {
      id: itemId,
    };

    props.setId(newData);
    setItemId("");
  };

  return (
    <div className="try">
      <form onSubmit={submitHandler}>
        <input
          className="search"
          type="number"
          min="0"
          max="10"
          inputMode="numeric"
          pattern="[0-9]*"
          id="itemID"
          placeholder="Enter Article ID (0 to 10)"
          value={itemId}
          onChange={idChangeHandler}
        />
        <button className="button">Search</button>
      </form>
    </div>
  );
}

export default Search;
