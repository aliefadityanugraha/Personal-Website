/** @format */

const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const categoryController = require("../controllers/categoryController");
const roleController = require("../controllers/roleController");
const accountController = require("../controllers/accountController");
const resetPasswordController = require("../controllers/resetPasswordController");

const { isLogin } = require("../middleware/authMidleware");
const { isAdmin } = require("../middleware/adminMidleware");

router.get("/", mainController.home);
router.get("/auth", userController.auth);
router.get("/auth/login", userController.login);
router.post("/auth/login", userController.authetication);
router.get("/auth/signup", userController.signUp);
router.post("/auth/signup", userController.save);
router.get("/auth/get-reset-password", resetPasswordController.resetLinkView);
router.post("/auth/get-reset-password", resetPasswordController.sendMail);

router.get("/account", isLogin, mainController.account);
router.post("/profile-picture", accountController.uploadProfile);
router.post("/edit-account", isLogin, accountController.editAccount);
router.post("/user/change-password", isLogin, userController.changePassword);

router.get("/read/:_id", postController.read);
router.get("/insert-post", isLogin, postController.inserView);
router.post("/insert-post", isLogin, postController.insert);
router.post("/edit-post", isLogin, postController.edit);
router.get("/delete-post/:_id", isLogin, postController.delete);

router.get("/insert-category", isLogin, isAdmin, categoryController.insertView);
router.post("/insert-category", isLogin, isAdmin, categoryController.insert);
router.post("/edit-category", isLogin, isAdmin, categoryController.edit);
router.get(
  "/delete-category/:_id",
  isLogin,
  isAdmin,
  categoryController.delete
);

router.get("/insert-role", isLogin, isAdmin, roleController.insertView);
router.post("/insert-role", isLogin, isAdmin, roleController.insert);

router.get("/auth/logout", userController.logout);
module.exports = router;
