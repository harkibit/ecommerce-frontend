const BASE_URL = process.env.BASE_URL || "http://localhost:1337";
export const API_URL = process.env.API_URL || "http://localhost:1337/api/";

export const fromImageToURL = (image) => {
  if (!image) {
    return "/vercel.svg";
  }
  if (image.url.indexOf("/") === 0) {
    return `${BASE_URL}${image.url}`;
  }
  return image.url;
};
