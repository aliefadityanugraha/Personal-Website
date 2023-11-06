/** @format */

const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const mainController = require("../controllers/mainController");
const errorController = require("../controllers/errorController");
const userManagementController = require("../controllers/userManagementController");
const testController = require("../controllers/testController");

const { isLogin, isAdmin } = require("../middleware/authMidleware");
const { isRole } = require("../middleware/roleMidleware");

router.get("/admin", isLogin, isRole([2]), adminController.dashboard);
router.get(
  "/administrator/user-management",
  isLogin,
  isRole([2]),
  userManagementController.userManagementView
);

router.get(
  "/test-role-management",
  isLogin,
  isRole([2]),
  testController.authPage
);

// ajax
router.post("/auth-info", mainController.ajax);
// error handler
router.get("/*", errorController.error404);

module.exports = router;
