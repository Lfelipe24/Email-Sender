import axiosIntance from "@/services/axios-instance";

export const signOut = async () => {
  try {
    const response = await axiosIntance.post("/auth/sign-in");
    return response.data;
  } catch (error) {
    throw new Error(`Sign out Error: ${error}`);
  }
};
