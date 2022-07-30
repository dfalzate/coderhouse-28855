import { MongoClient } from "./deps.ts";
import { User } from "./types/user.type.ts";

const client = new MongoClient();

try {
  await client.connect("mongodb://127.0.0.1:27017");
  console.log("DB connected!");
} catch (error) {
  console.log(error);
}

const db = client.database("deno");
export const users = db.collection<User>("users");
