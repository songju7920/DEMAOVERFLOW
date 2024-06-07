import { axios } from "./utils/axios.ts";

const basePath = "user";

export const signup = async (data) => {
  return await axios.post(`/${basePath}/signup`, data);
};

export const login = async (data) => {
  return await axios.post(`${basePath}/login`, data);
};
