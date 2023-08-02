import http from "../utils/http";
import apiConfig from "../config/ApiConfig";
import { LoginInputType } from "../utils/types/LoginInputType";

export const login = async (payload: LoginInputType) => {
    return await http.post(apiConfig.apiEndPoints.auth.login, payload);
}