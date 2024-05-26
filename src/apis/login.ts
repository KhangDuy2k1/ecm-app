import { postRequest } from "../util/axios";

export const login = (data: any) => postRequest("user/login", data);