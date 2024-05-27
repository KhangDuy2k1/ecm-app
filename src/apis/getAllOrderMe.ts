import { getRequest } from "../util/axios";

export const getAllOrder = () => getRequest("order/all-orders-me");