var express = require("express");
var router = express.Router();
var companyCont = require("../controllers/company");

//GET /company/history
router.get("/history", companyCont.getCompanyHistory);

//GET /company/work-history
router.get("/work-history", companyCont.getWorkHistory);

//GET /company/staff
router.get("/staff", companyCont.getStaff);

//GET /company/contact-us

//GET /company/links

module.exports = router;
