import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setValues } from "../store/valueSlice/valueSlice";

const StartPage = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [fromValue, setFromValue] = useState<number>(0);
  const [toValue, setToValue] = useState<number>(100);

  const handleCheck = () => {
    if (isNaN(fromValue) || isNaN(toValue)) {
      alert("Please enter a valid number");
      return;
    }

    if (fromValue >= toValue) {
      alert("The 'From' value must be less than the 'To' value");
      return;
    }

    dispatch(setValues({ fromValue: fromValue, toValue: toValue }));

    navigator("/gamePage");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="flex flex-col items-center text-white size-[600px] space-y-5">
        <h1 className="font-semibold text-3xl">Number Guess Game</h1>
        <p className="font-semibold text-md text-center">
          The computer will choose a number for you, and you will try to find
          that number.
        </p>
        <div className="flex space-x-5">
          <div className="flex flex-col text-center">
            <span>From</span>
            <input
              type="number"
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setFromValue(Number(e.target.value)) // Burada Number() kullanıldı
              }
              value={fromValue}
              className="border-none appearance-none outline-none text-black px-2 py-0.2 border-b-black"
            />
          </div>
          <div className="flex flex-col text-center">
            <span>To</span>
            <input
              type="number"
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) =>
                  setToValue(Number(e.target.value)) // Burada Number() kullanıldı
              }
              value={toValue}
              className="border-none appearance-none outline-none text-black px-2 py-0.2 border-b-black"
            />
          </div>
        </div>
        <button
          onClick={handleCheck}
          className="bg-white text-black font-semibold px-4 py-1 rounded-lg"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartPage;
