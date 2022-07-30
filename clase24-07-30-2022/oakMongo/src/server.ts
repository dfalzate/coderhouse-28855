import { Application } from "./deps.ts";
import UserRoute from "./routes/user.route.ts";
import { logger } from "./middlewares/logger.middleware.ts";
import "./db.ts";

const app = new Application();

app.use(logger);
app.use(UserRoute.routes());

console.log("Server running on http://localhost:3000");
await app.listen({ port: 3000 });
