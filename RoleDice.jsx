import React, { useState } from "react";
import styled from "styled-components";

function RoleDice() {
  const [CurrentDice, SetCurrentDice] = useState(1);

  //  Onclick on the div will generate a random Number from 1 to 6 that we get as a parameter
  const GenerateRandomNumber = (min, max) => {
    // generate a random number from 1 to 6
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = GenerateRandomNumber(1, 7); // generate a random number from 1 to 6
    SetCurrentDice((prev) => randomNumber); // set the current dice to the random number , prev is used to get the previous value of the state because we are updating the state in the same function
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${CurrentDice}.png`} alt="dice-1" /> 
        {/* render the current dice image based on the current dice state */}
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;

// ReactJs - NextJs - Angular - Tailwind - ChakraUI, Siap slicing dari Figma
