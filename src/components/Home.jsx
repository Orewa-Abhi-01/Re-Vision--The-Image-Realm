import React, { useState } from "react";
import ImgUpload from "./ImgUpload";
import ImgPreview from "./ImgPreview";
import {enhancedImgAPI} from "../utils/enhancedImgAPI.js"
const Home = () => {
  const [uploadImg, setUploadImg] = useState(null);
  const [enhancedImg, setEnhancedImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    setUploadImg(URL.createObjectURL(file));
    setLoading(true);
    
    // api calling
    try {
     const enhancedUrl = await enhancedImgAPI(file)
     setEnhancedImg(enhancedUrl.image);
     
     
     
     setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error while enhancing the img")
    }
  
  };

  console.log(enhancedImg);
  
  return (
    <div className="text-3xl font-bold bg-amber-  flex flex-col justify-center items-center gap-8 w-full min-h-[50vh]">
      <ImgUpload handleUpload={handleUpload} />
      <ImgPreview
        loading={loading}
        uploaded={uploadImg}
        enhanced={enhancedImg}
      />
    
    </div>
  );
};

export default Home;
