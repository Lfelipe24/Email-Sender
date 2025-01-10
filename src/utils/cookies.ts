import dayjs from "dayjs";
import { refreshTokenApi } from "@/services/auth/refresh-token";
import { getExpireDate } from "./date";

export const getCookie = (cookieName: string) => {
  const match = document.cookie.match(`(?:^|; )${cookieName}=([^;]*)`);
  return match ? decodeURIComponent(match[1]) : undefined;
};

export const setCookie = (
  cookieName: string,
  value: string,
  expire: string
) => {
  document.cookie = `${cookieName}=${value}///${expire};`;
};

export const deleteCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

export const refreshToken = async () => {
  const refreshToken = getCookie("refreshToken");
  const accessToken = getCookie("accessToken");
  if (!refreshToken || !accessToken) return;

  // Expire Refresh Token -> go to the loginPage
  const expireRefreshToken = refreshToken.split("///")[1];
  const expireRefreshDate = dayjs(expireRefreshToken);
  if (dayjs().isAfter(expireRefreshDate)) {
    deleteCookie("refreshToken");
    deleteCookie("accessToken");
    // go to loginPage
    return;
  }

  // Expire Access Token -> Call api to get new tokens
  const expireAccessToken = accessToken.split("///")[1];
  const expireAccessDate = dayjs(expireAccessToken);

  if (dayjs().isAfter(expireAccessDate)) {
    const response = await refreshTokenApi({ refreshToken: refreshToken });
    if (response && response.statusCode === 200) {
      const newAccessToken = response.body.access_token;
      const newRefreshToken = response.body.refresh_token;
      setCookie(
        "accessToken",
        response.body.access_token,
        getExpireDate(30, "minute")
      );
      setCookie(
        "refreshToken",
        response.body.refresh_token,
        getExpireDate(1, "day")
      );
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    }
  }
};
