import { Application } from "./deps.ts";
import UserRoute from "./routes/user.route.ts";

const app = new Application();

app.use(UserRoute.routes());

console.log("Server running on http://localhost:3000");
await app.listen({ port: 3000 });
