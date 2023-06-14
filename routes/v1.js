/** @format */

const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const categoryController = require("../controllers/categoryController");
const roleController = require("../controllers/roleController");
const accountController = require("../controllers/accountController");
const { isLogin } = require("../middleware/authMidleware");
const { isAdmin } = require("../middleware/adminMidleware");

router.get("/", mainController.home);
router.get("/auth", userController.auth);
router.get("/login", userController.login);
router.post("/login", userController.authetication);
router.get("/signup", userController.signUp);
router.post("/signup", userController.save);

router.get("/account", isLogin, mainController.account);
router.post("/profile-picture", accountController.uploadProfile);
router.post("/edit-account", isLogin, accountController.editAccount);

router.get("/read/:_id", postController.read);
router.get("/insert-post", isLogin, postController.inserView);
router.post("/insert-post", isLogin, postController.insert);

router.get("/insert-category", isLogin, isAdmin, categoryController.insertView);
router.post("/insert-category", isLogin, isAdmin, categoryController.insert);
router.get("/insert-role", isLogin, isAdmin, roleController.insertView);
router.post("/insert-role", isLogin, isAdmin, roleController.insert);

router.get("/logout", userController.logout);
module.exports = router;
