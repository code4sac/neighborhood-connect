import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NeighborhoodSelector = ({ neighborhood, setNeighborhood }) => {
  const [value, setValue] = useState(neighborhood);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setNeighborhood(value);
    setRedirect(true);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      {redirect ? (
        <Redirect to={"/"} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label for="neighborhood">Neighborhood</label>
          <input
            type="text"
            id="neighborhood"
            value={value}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default NeighborhoodSelector;
