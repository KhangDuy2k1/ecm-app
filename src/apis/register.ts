import { postRequest } from "../util/axios";

export const register = (data: any) => postRequest("user/register", data)