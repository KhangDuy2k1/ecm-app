import { postRequest } from "../util/axios";

export const order = (data: any) => postRequest(`order/order`, data)