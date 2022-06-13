const dotenv = require("dotenv");
dotenv.config();

const config = {
  client: "mysql2",
  connection: {
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
  },
};

module.exports = { config };
