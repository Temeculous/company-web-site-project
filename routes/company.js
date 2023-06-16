var express = require("express");
var router = express.Router();
var companyCont = require("../controllers/company");

//GET /company/history
router.get("/company/history", companyCont.getCompanyHistory);
