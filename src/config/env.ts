import dotenv from "dotenv";

dotenv.config();

// ENV
const NODE_MODE = process.env.NODE_MODE;
const PORT = process.env.PORT || 4000;

// DB
const DB_APP_CONNECTION = process.env.DB_APP_CONNECTION || "";

// APP ORIGINS
const APP_ORIGIN = process.env.APP_ORIGIN;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

const APP_ORIGINS = [CLIENT_ORIGIN];

// AUTH
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// CLOUDINARY
// const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
// const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
// const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

// EMAIL
const MAILTRAP_HOST = process.env.MAILTRAP_HOST || "";
const MAILTRAP_PORT = process.env.MAILTRAP_PORT || "";
const MAILTRAP_USERNAME = process.env.MAILTRAP_USERNAME || "";
const MAILTRAP_PASSWORD = process.env.MAILTRAP_PASSWORD || "";

const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "";
const EMAIL_HOST = process.env.EMAIL_HOST || "";
const EMAIL_PORT = process.env.EMAIL_PORT || "";
const EMAIL_USERNAME = process.env.EMAIL_USERNAME || "";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";

export {
  // ENV
  NODE_MODE,
  PORT,
  // DB
  DB_APP_CONNECTION,
  // APP ORIGINS
  APP_ORIGIN,
  APP_ORIGINS,
  // AUTH
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  // CLOUDINARY
  // CLOUDINARY_CLOUD_NAME,
  // CLOUDINARY_API_KEY,
  // CLOUDINARY_API_SECRET,
  // EMAIL
  MAILTRAP_HOST,
  MAILTRAP_PORT,
  MAILTRAP_USERNAME,
  MAILTRAP_PASSWORD,
  //_________________
  EMAIL_SERVICE,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
};
