/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Screen from "./components/Screen";
import NerDamer from "nerdamer";

function App() {
  const [Number, setNumber] = useState("");
  const [Result, setResult] = useState([{ val: "", res: "" }]);
  const ButtonHandle = (e) => {
    setNumber(Number + e.target.value);
  };
  const backSpace = () => {
    setNumber(Number.slice(0, -1));
  };
  const Clear = () => {
    setNumber("");
    setResult([]);
  };
  const calculate = () => {
    try {
      const equation = Number; // Get the equation from the input field
      const result = NerDamer(equation).evaluate();
      //setResult with previousData
      setResult([
        ...Result,
        {
          val: equation,
          res: result.toString(),
        },
      ]);

      setNumber(result.toString());
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculate();
    } else if (e.key === "Backspace") {
      backSpace();
    } else if (e.keyCode >= 96 && e.keyCode <= 111) {
      setNumber(Number + e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }),
    [handleKeyPress];

  return (
    <>
      <div className="container mx-auto cont bg-zinc-600 rounded-3xl overflow-hidden">
        {/* Label for App */}
        <h1 className=" text-4xl font-bold text-white text-center py-3">
          <i className="fa-solid fa-calculator"></i>
          {} Calculator
        </h1>

        {/* screen for app */}
        <Screen
          value={Number}
          onClickClear={backSpace}
          keyDown={handleKeyPress}
          onChange={() => {}}
          pastValue={Result}
        />

        {/* Buttons for app  */}
        <div className="container mx-auto p-3 ps-4 text-white bg-zinc-700  grid grid-cols-5">
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="C"
            onClick={Clear}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="("
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value=")"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="Mod"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="π"
            onClick={ButtonHandle}
          />

          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="7"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="8"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="9"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="/"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="√"
            onClick={ButtonHandle}
          />

          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="4"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="5"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="6"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="*"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="x²"
            onClick={ButtonHandle}
          />

          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="1"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="2"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="3"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="-"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-orange-500 row-span-2 bg-orange-500"}
            value="="
            onClick={calculate}
          />

          <Button
            bgColor={"dark:bg-gray-500 bg-white"}
            value="0"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-zinc-400"}
            value="."
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-500 bg-zinc-400"}
            value="%"
            onClick={ButtonHandle}
          />
          <Button
            bgColor={"dark:bg-gray-800 bg-zinc-400"}
            value="+"
            onClick={ButtonHandle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
