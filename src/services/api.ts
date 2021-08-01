import axios from "axios";
import { parseCookies } from "nookies";
export function getAPIClient(ctx?: any) {
  const { "nextauth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://api.lojanainternet.app.br/v2/auth/login",
  });

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  return api;
}

export const api = getAPIClient();
