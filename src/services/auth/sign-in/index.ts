import axiosIntance from "@/services/axios-instance";

export const signIn = async (body: { email: string; password: string }) => {
  try {
    const response = await axiosIntance.post("/auth/sign-in", body);
    return response.data;
  } catch (error) {
    throw new Error(`Login Error: ${error}`);
  }
};
