import dayjs from "dayjs";

export const getExpireDate = (expireIn: number, unit: dayjs.ManipulateType) => {
  return dayjs().add(expireIn, unit).format("YYYY-MM-DDTHH:mm:ssZ[Z]");
};
