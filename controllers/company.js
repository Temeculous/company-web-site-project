module.exports = {
  getCompanyHistory,
};

function getCompanyHistory(req, res) {
  res.render("company/history", { title: "Work History" });
}
