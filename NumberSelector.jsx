import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({ selectedNumber, setSelectedNumber }) {
  const arrayNo = [1, 2, 3, 4, 5, 6];


  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrayNo.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber} // This prop won't be passed to the DOM element
            onClick={() => setSelectedNumber(value)} // for setting selected number on click of box
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    gap: 24px;
    display: flex;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
