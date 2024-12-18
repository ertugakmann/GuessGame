import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

const GamePage = () => {
  const { fromValue, toValue } = useSelector(
    (state: RootState) => state.values
  );

  return (
    <div>
      from value : {fromValue}
      <br /> to value : {toValue}
    </div>
  );
};

export default GamePage;
