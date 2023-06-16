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
router.get("/contact-us", companyCont.showContactInfo);

//GET /company/links
router.get("/links", companyCont.getLinks);

module.exports = router;
