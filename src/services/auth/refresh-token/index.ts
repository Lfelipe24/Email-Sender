import axiosIntance from "@/services/axios-instance";
import { ApiBaseResponse, RefreshTokenResponse } from "@/types";

export const refreshTokenApi = async (body: {
  refreshToken: string;
}): Promise<ApiBaseResponse<RefreshTokenResponse>> => {
  try {
    const response = await axiosIntance.post("/auth/refresh-token", body);
    return response.data;
  } catch (error) {
    throw new Error(`Refresh Token Error: ${error}`);
  }
};
