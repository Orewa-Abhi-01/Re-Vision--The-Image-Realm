import React from 'react'

const ImgUpload = (props) => {

  const showImageHandler = (e) => {
    const file = e.target.files[0];
   if(file){
    props.handleUpload(file);
   }

  }
  return (
    <div className=" img-upload bg-white hover:bg-blue-600 transition-all  shadow-lg rounded-2xl  w-1/2 h-[250px] flex flex-col items-center justify-center max=w-2xl">
        <label htmlFor="fileInput" className=" w-full h-full  cursor-pointer border-2 border-dashed border-gray-300 rounded-lg text-center  flex flex-col items-center justify-center" >
          <input type="file" id="fileInput"  className="hidden" onChange={showImageHandler} />
          <p className="text-zinc-700 hover:text-[#efefef] capitalize">Click and drag to upload your image</p>
        </label>
    </div>
  )
}

export default ImgUpload