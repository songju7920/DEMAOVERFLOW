import Axios from "axios";
import { BaseURL } from "../../../env.ts";

export const axios = Axios.create({
  baseURL: BaseURL
});
