import crypto from "crypto-js";

const sleep = async (millisecond: number) => {
  return new Promise((resolve) => setTimeout(resolve, millisecond));
};

const encryptData = (data: any, secret: string): string => {
  const enrcypted = crypto.AES.encrypt(data, secret).toString();
  return enrcypted;
};

const decryptData = (data: any, secret: string): string => {
  const bytesData = crypto.AES.decrypt(data, secret).toString(crypto.enc.Utf8);
  return bytesData;
};

export { sleep, encryptData, decryptData };
