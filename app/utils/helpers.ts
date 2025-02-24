import Cookies from "js-cookie";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const popRouteFromPath = (path: string, count: number = 1): string => {
  const pathArray = path.split("/");

  for (let i = 0; i < count; i++) {
    pathArray.pop();
  }

  return pathArray.join("/");
};

export const getCookieAccessToken = () => {
  return Cookies.get("access_token");
};

export const getCookieRefreshToken = () => {
  return Cookies.get("refresh_token");
};

export function getPropByString(obj, propString) {
  if (!propString) return obj;

  let prop,
    props = propString.split(".");

  let i = 0;
  let iLen = props.length - 1;

  for (; i < iLen; i++) {
    prop = props[i];

    let candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  return obj[props[i]];
}
