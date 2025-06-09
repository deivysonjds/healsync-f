import {jwtDecode} from "jwt-decode";

export function isTokenValid(token) {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp && decoded.exp > currentTime;
    
  } catch (e) {
    return false;
  }
}
