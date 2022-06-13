const moment = require("moment");

const nacimiento = moment().format("26/06/1975", "DD/MM/YYYY");

const hoy = moment();

const rsdo = moment(nacimiento, "DD/MM/YYYY").fromNow();

console.log(rsdo);
