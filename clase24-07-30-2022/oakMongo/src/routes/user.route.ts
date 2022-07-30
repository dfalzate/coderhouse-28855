import { Router } from "../deps.ts";
import * as UserHandlers from "../handlers/user.handler.ts";

const router = new Router({
  prefix: "/users",
});

router.get("/", UserHandlers.getUsers);
router.get("/:id", UserHandlers.getUser);
router.post("/", UserHandlers.crateUser);
router.patch("/:id", UserHandlers.updateUser);
router.delete("/:id", UserHandlers.deleteUser);

export default router;
