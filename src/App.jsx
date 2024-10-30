import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  let inputIsValid = userInput.duration > 0;

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleInputChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please Enter duration greater than zero</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
