const companyData = require("../models/Company");

module.exports = {
  getCompanyHistory,
  getWorkHistory,
  getStaff,
};

function getCompanyHistory(req, res) {
  res.render("company/history", { title: "Company History" });
}

function getWorkHistory(req, res) {
  res.render("company/work-history", { title: "Work History" });
}

function getStaff(req, res) {
  res.render("company/staff", {
    title: "Staff",
    staff: companyData.getAllStaff(),
  });
}
