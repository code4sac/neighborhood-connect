import React from "react";
import Priority from "./Priority";
import { styled } from "styled-components";

const PrioritiesPage = () => {
  return (
    <div>
      <h1>Priorities</h1>
      <ul>
        <Priority />
      </ul>
    </div>
  );
};

export default PrioritiesPage;
