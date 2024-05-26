import { getRequest } from "../util/axios";

export const getAllProduct = () => getRequest("product/all-products")