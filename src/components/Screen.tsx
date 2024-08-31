/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type props = {
  value: string;
  pastValue: any[];
  keyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClickClear:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};

function Screen({ value, pastValue, keyDown, onClickClear, onChange }: props) {
  const data: any[] = pastValue.slice(1);

  return (
    <div className="dark:bg-zinc-900 mx-2 my-1 rounded-md bg-white">
      <div className=" h-52 py-5 px-2 scr">
        {data.map((data, index) => (
          <h1 className="dark:text-white ms-auto text-2xl " key={index}>
            {data.val + " = " + data.res}
          </h1>
        ))}
      </div>

      <div className=" h-20 flex flex-row bg-gray-50 dark:bg-gray-800">
        <input
          type="text"
          id="large-input"
          className="block w-50
          text-gray-900 d-flex
          bg-gray-50 text-base focus:ring-blue-500 
           dark:bg-gray-800 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
          value={value}
          onChange={onChange}
        />
        <i
          onClick={onClickClear}
          className="text-amber-400 my-5 me-5 fas fa-backspace text-3xl"
          onKeyDown={keyDown}
        ></i>
      </div>
    </div>
  );
}

export default Screen;
