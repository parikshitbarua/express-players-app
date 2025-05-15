export const appURL = {
  DEV: "http://localhost",
  QA: "",
  UAT: "",
  PROD: ""
} as const;

export const PLAYERS_DATA_URL = "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";

export type Environment = keyof typeof appURL;
