import { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GamePage = () => {
  const [userInput, setUserInput] = useState<number>(0);
  const [messageValue, setMessageValue] = useState<string>("");
  const [randomValue, setRandomValue] = useState<number>(0);

  const { fromValue, toValue } = useSelector(
    (state: RootState) => state.values
  );

  const handleNumberCheck = () => {
    if (randomValue == userInput) {
      setMessageValue("You won!");
    } else if (randomValue > userInput) {
      setMessageValue("Try higher");
    } else {
      setMessageValue("Try lower");
    }
  };

  useEffect(() => {
    const randomValue =
      Math.floor(Math.random() * (toValue - fromValue + 1)) + fromValue;

    setRandomValue(randomValue);
  }, []);

  return (
    <div>
      <input
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserInput(e.target.value)
        }
        value={userInput}
      />
      <button onClick={handleNumberCheck} className="bg-black">
        Check
      </button>
      <p>{messageValue}</p>
    </div>
  );
};

export default GamePage;
