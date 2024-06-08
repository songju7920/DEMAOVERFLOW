import { axios } from "./utils/axios.ts";

const basePath = "/comment";

export const createComment = async (data) => {
  await axios.post(`${basePath}/create`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  });
};

export const getCommentList = async (postId) => {
  return await axios.get(`${basePath}/get/${postId}`);
};
