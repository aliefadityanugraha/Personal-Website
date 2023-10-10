/** @format */

const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const mainController = require("../controllers/mainController");
const errorController = require("../controllers/errorController");

const { isLogin, isAdmin } = require("../middleware/authMidleware");

router.get("/admin", isLogin, isAdmin, adminController.dashboard);

// ajax
router.post("/auth-info", mainController.ajax);
// error handler
router.get("/*", errorController.error404);

module.exports = router;
