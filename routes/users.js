const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const catchAsync = require("../utils/catchAsync");
const passport = require("passport");

router
  .route("/register")
  .get((req, res) => {
    res.render("users/register");
  })
  .post(catchAsync(users.registerUser));

router
  .route("/login")
  .get(users.renderLoginForm)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
      failureMessage: true,
      keepSessionInfo: true,
    }),
    users.loginUser
  );

router.get("/logout", users.logoutUser);

module.exports = router;
