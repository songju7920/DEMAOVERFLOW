import { axios } from "./utils/axios.ts";

const basePath = "/post";

export const createPost = async (data) => {
  await axios.post(`${basePath}/create`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  });
};

export const getPosts = async (keyword) => {
  return await axios.get(`${basePath}/search?keyword=${keyword}`);
};
