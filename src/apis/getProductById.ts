import { getRequest } from "../util/axios";

export const getProductById = (id: any) => getRequest(`product/get-product/${id}`)