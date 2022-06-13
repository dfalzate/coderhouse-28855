import dotenv from "dotenv";
dotenv.config();

export const config = {
  client: "mysql2",
  connection: {
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
  },
};
