const companyData = require("../models/Company");

module.exports = {
  getCompanyHistory,
  getWorkHistory,
  getStaff,
  showContactInfo,
  getLinks,
};

function getCompanyHistory(req, res) {
  res.render("company/history", { title: "Company History" });
}

function getWorkHistory(req, res) {
  res.render("company/work-history", {
    title: "Work History",
    projects: companyData.getCompanyHistory(),
  });
}

function getStaff(req, res) {
  res.render("company/staff", {
    title: "Staff",
    staff: companyData.getAllStaff(),
  });
}

function showContactInfo(req, res) {
  res.render("company/contact", { title: "Contact Us" });
}

function getLinks(req, res) {
  res.render("company/links", {
    title: "Links",
    links: companyData.getLinks(),
  });
}
