import axiosIntance from "@/services/axios-instance";
import { ApiBaseResponse, SignInApiResponse } from "@/types";

export const signIn = async (body: {
  email: string;
  password: string;
}): Promise<ApiBaseResponse<SignInApiResponse>> => {
  try {
    const response = await axiosIntance.post("/auth/sign-in", body);
    return response.data;
  } catch (error) {
    throw new Error(`Login Error: ${error}`);
  }
};
