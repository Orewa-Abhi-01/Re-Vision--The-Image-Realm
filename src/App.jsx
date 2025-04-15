import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App text-center min-h-screen">
      <div className="title">
        <h1 className="text-4xl font-bold">
          <span className="text-[#ec4e39]">Re:Vision</span> - The Image Realm{" "}
        </h1>
        <h2 className="text-7xl text-[#dadada] ">An AI Image Enhancer</h2>
        <p className="text-lg text-gray-500">
          Upload Your Image and let AI enhance to in seconds!
        </p>
      </div>

      <Home />

      <div className="text-lg">
        Let Your Image get enhanced by AI in Seconds{" "}
        <p>
          Powered by @<span className="text-[#34db34]">ABHI</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default App;
