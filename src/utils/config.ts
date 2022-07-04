const { DEV, VITE_SERVER_URL } = import.meta.env;
const isDev = DEV;
const config = {
  isDev,
  BaseURL: VITE_SERVER_URL,
  Release: "0.0.1",
};
export default config;
