const { DEV, VITE_Release, VITE_SERVER_URL } = import.meta.env;
const isDev = DEV;
const config = {
  isDev,
  BaseURL: VITE_SERVER_URL,
  Release: VITE_Release,
};
export default config;
