import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  let encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_SECRET_PASSWORD_KEY
  );
  return encryptedData.toString();
};

export const decryptData = (data) => {
  let decryptedData = CryptoJS.AES.decrypt(
    data,
    process.env.REACT_APP_SECRET_PASSWORD_KEY
  );
  return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
};
