import { postRequest } from "../util/axios";

export const addToCart = (id: any) => postRequest(`user/add-to-cart/${id}`)