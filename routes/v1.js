/** @format */

const express = require("express");
const router = express.Router();

// import controller
const mainController = require("../controllers/mainController");
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const categoryController = require("../controllers/categoryController");
const roleController = require("../controllers/roleController");
const accountController = require("../controllers/accountController");
const resetPasswordController = require("../controllers/resetPasswordController");

// import midleware
const { isLogin } = require("../middleware/authMidleware");
const { isRole } = require("../middleware/roleMidleware");

// declare main route
router.get("/", mainController.home);
router.get("/auth", userController.auth);
router.get("/auth/login", userController.login);
router.post("/auth/login", userController.authetication);
router.get("/auth/signup", userController.signUp);
router.post("/auth/signup", userController.save);
router.get("/auth/get-reset-password", resetPasswordController.resetLinkView);
router.post("/auth/get-reset-password", resetPasswordController.sendMail);

// declare user route
router.get("/account", isLogin, mainController.account);
router.post("/profile-picture", accountController.uploadProfile);
router.post("/edit-account", isLogin, accountController.editAccount);
router.post("/user/change-password", isLogin, userController.changePassword);
router.post("/user/delete-account", isLogin, userController.deleteAccount);

router.get("/read/:_id", postController.read);
router.get("/insert-post", isLogin, postController.inserView);
router.post("/insert-post", isLogin, postController.insert);
router.post("/edit-post", isLogin, postController.edit);
router.get("/delete-post/:_id", isLogin, postController.delete);

// declare post route
router.get(
  "/insert-category",
  isLogin,
  isRole(2),
  categoryController.insertView
);
router.post("/insert-category", isLogin, isRole(2), categoryController.insert);
router.post("/edit-category", isLogin, isRole(2), categoryController.edit);
router.get(
  "/delete-category/:_id",
  isLogin,
  isRole(2),
  categoryController.delete
);

// declare role route
router.get(
  "/administrator/insert-role",
  isLogin,
  isRole(3),
  roleController.insertView
);
router.post(
  "/administrator/insert-role",
  isLogin,
  isRole(3),
  roleController.insert
);
router.post(
  "/administrator/edit-role",
  isLogin,
  isRole(3),
  roleController.edit
);

// declare logout route
router.get("/auth/logout", userController.logout);
module.exports = router;
