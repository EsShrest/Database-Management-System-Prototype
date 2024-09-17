import { config } from "dotenv";

config()

export const email = process.env.EMAIL
export const pass = process.env.PASS
export const secretKey = process.env.KEY
export const db_url = process.env.DB_URL
export const url = process.env.URL



