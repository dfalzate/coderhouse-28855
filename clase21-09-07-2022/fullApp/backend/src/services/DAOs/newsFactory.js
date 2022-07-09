import { NewsFile } from "./newsFile.DAO.js";
import { NewsMongo } from "./newsMongo.DAO.js";

const selectedDAO = process.argv[2];

let DAO = null;

switch (selectedDAO) {
  case "mongo":
    NewsMongo.init();
    DAO = new NewsMongo();
    break;
  default:
    DAO = new NewsFile();
    break;
}

export default DAO;
