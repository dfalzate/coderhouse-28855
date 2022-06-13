import fs from "fs";
import { faker } from "@faker-js/faker";

let str = "Nombre,Apellido,Email,Trabajo,Dirección\r\n";

for (let i = 0; i < 100; i++) {
  str +=
    faker.name.findName() +
    ";" +
    faker.name.lastName() +
    ";" +
    faker.internet.email() +
    ";" +
    faker.name.jobTitle() +
    ";" +
    faker.address.streetAddress() +
    "\r\n";
}

fs.writeFileSync("usuario.csv", str);
