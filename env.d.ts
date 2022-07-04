/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_URL: string;
  readonly VITE_TIME_OUT: number;
  readonly VITE_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
