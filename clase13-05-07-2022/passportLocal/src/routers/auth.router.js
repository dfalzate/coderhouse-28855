import express from "express";
import passport from "../utils/passport.util.js";
import * as AuthController from "../controllers/auth.controller.js";
import * as AuthMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                   signup                                   */
/* -------------------------------------------------------------------------- */

router.get("/signup", AuthController.getSignup);
router.post(
  "/signup",
  passport.authenticate("signup", { failureRedirect: "/failSignup" }),
  AuthController.postSignup,
);
router.get("/failSignup", AuthController.failSignup);

/* -------------------------------------------------------------------------- */
/*                                    login                                   */
/* -------------------------------------------------------------------------- */

router.get("/login", AuthController.getLogin);
router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/failLogin" }),
  AuthController.postLogin,
);
router.get("/failLogin", AuthController.failLogin);

/* -------------------------------------------------------------------------- */
/*                                   logout                                   */
/* -------------------------------------------------------------------------- */

router.get("/logout", AuthController.logout);

/* -------------------------------------------------------------------------- */
/*                                Authenticated                                */
/* -------------------------------------------------------------------------- */

router.get("/protected", AuthMiddleware.checkAuthentication, (req, res) => {
  console.log("Esta autenticado");
  res.send("<h1>Esta autenticado</h1>");
});

export default router;
