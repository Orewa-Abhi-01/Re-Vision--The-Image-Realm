import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const MAX_POLLING_ATTEMPTS = 20;

export const enhancedImgAPI = async (file) => {
  try {
    // code to upload img
    const taskId = await uploadImg(file);
    console.log("img uploaded successfully,task id:", taskId, file);

    // fetch to enhanced img

    // const enhancedImgData = await fetchEnhancedImg("a2188044-6525-4b8e-ad93-6a4c3fc327ba ");
    const enhancedImgData = await PollingForEnhancedImg(taskId);

    console.log("enhanced img data:", enhancedImgData?.image);

    return enhancedImgData;
  } catch (error) {
    console.error(error.message);
  }
};

const uploadImg = async (file) => {
  // /api/tasks/visual/scale  -

  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Error while uploading img! Task id not found");
  }

  console.log("uploading img", data);

  return data.data.task_id;
};

const fetchEnhancedImg = async (taskId) => {
  // /api/tasks/visual/scale/{task_id}

  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error(
      "Error while uploading img! Task id  and enhanced image not found"
    );
  }

  console.log("fetching enhanced img", data?.data);

  return data.data;
};

// polling
const PollingForEnhancedImg = async (taskId, retries = 1) => {
  const result = await fetchEnhancedImg(taskId);

  if (result.state === 4) {
    console.log(`processing....  ${retries}/${MAX_POLLING_ATTEMPTS}`);

    if (retries >= MAX_POLLING_ATTEMPTS) {
      throw new Error("Error while uploading img! Task id not found");
    }

    // wait for 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return PollingForEnhancedImg(taskId, retries + 1);
  }

  console.log("enhanced img data:", result);
  return result;
};
