import "dotenv/config";

const env = process.env;

export const baseUrl = env.BASE_URL;
export const userId = env.USER_ID;
export const userSecretKey = env.USER_SECRET_KEY;

export const colors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  resetColor: "\x1b[0m",
};

export const highlightLog = (color, message) => {
  console.log(colors[color], message, colors.resetColor);
};
