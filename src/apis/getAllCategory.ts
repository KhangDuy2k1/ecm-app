import { getRequest } from "../util/axios";

export const getAllCategory = () => getRequest("category/all-categories")