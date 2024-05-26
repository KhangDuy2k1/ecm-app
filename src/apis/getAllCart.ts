import { getRequest } from "../util/axios";

export const getAllCart  = () => getRequest("user/all-cart")