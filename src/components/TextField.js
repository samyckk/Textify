import React, { useState } from "react";

export default function TextField(props) {
  const [text, setText] = useState("");
  const [wordsLen, setLen] = useState(0);
  const [copyBtnText, setCopyBtnText] = useState("Copy");

  const toUpper = () => {
    let upper = text.toUpperCase();
    setText(upper);
    props.showMsg("Uppercase has been done");
  };

  const toLower = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showMsg("Lowercase has been done");
  };

  const handleCopy = () => {
    setCopyBtnText("Copied!");
    navigator.clipboard.writeText(text);
    props.showMsg("Copied to clipboard");
  };

  const handleClear = () => {
    setText("");
    setLen(0);
    setCopyBtnText("Copy");
  };

  const txtChange = (event) => {
    setCopyBtnText("Copy");

    let str = event.target.value.trim();
    // Split the string into words using spaces as delimiter
    let words = str.split(/\s+/);
    // Filter out empty strings (in case of multiple consecutive spaces)
    words = words.filter((word) => word !== "");
    setLen(words.length);
    setText(event.target.value);
  };

  return (
    <>
      <div className="area w-11/12 m-auto">
        <textarea
          id="message"
          rows="12"
          className={`mt-8 block p-2.5 w-full text-sm rounded-lg border ${
            props.themeMode === "dark"
              ? "bg-gray-200 text-black"
              : "bg-gray-700 text-white"
          } border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500`}
          placeholder="Enter Your Text Here"
          value={text}
          onChange={txtChange}
        ></textarea>
      </div>
      <div id="btns" className="flex justify-start items-center w-11/12 m-auto">
        <button
          type="button"
          onClick={toUpper}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-200 mt-2"
        >
          To Uppercase
        </button>
        <button
          type="button"
          onClick={toLower}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-200"
        >
          To Lowercase
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-200"
        >
          {copyBtnText}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-200"
        >
          Clear
        </button>
      </div>

      <div id="summary" className="w-11/12 m-auto flex flex-col">
        <h1
          className={`text-6xl mt-4 ${
            props.themeMode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Summary
        </h1>
        <span
          className={`mt-2 ${
            props.themeMode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Total number of words are {wordsLen} and total characters are{" "}
          {text.length}
        </span>
      </div>
    </>
  );
}
