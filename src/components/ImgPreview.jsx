import React from "react";
import Loading from "./Loading";

const ImgPreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl min-h-[300px] bg-white/80  transition-all  shadow-lg rounded-2xl overflow-hidden ">
      <div className="flex flex-col items-center justify-center border-dashed border-r-2 border-black overflow-hidden">
        <h2 className="text-black">Before</h2>
        <img
          // src="https://i.pinimg.com/474x/3d/93/ba/3d93ba6e754fd1c97d8ec43a4b4b64d6.jpg"
          src={props.uploaded}
          alt="before"
          hidden={!props.uploaded}
        />
        {!props.uploaded && (
          <div className=" bg-gray-700">
          No Image Selected
        </div>
        ) }
      </div>

      {/* Enhanced Image Image */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-black">After</h2>
        <img
          src={props.enhanced}
          // src="https://i.pinimg.com/736x/2b/b3/67/2bb3677aac382d92031f74fad6783326.jpg"
          alt="after" 
          hidden={!props.enhanced}
        />
        {props.loading  && (<Loading />) }

        {!props.enhanced  && (
          <div className="flex items-center justify-center h-8 bg-gray-700">
          No Enhanced Image 
        </div>
        )}
      </div>
    </div>
  );
};

export default ImgPreview;
