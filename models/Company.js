var staff = [
  { name: "John", age: 30, job: "Sales", id: 1 },
  { name: "Sarah", age: 25, job: "IT support", id: 2 },
  { name: "Ryan", age: 24, job: "Intern", id: 3 },
  { name: "Michael", age: 41, job: "CFO", id: 4 },
];

var companyHistory = [
  { project: "project1", details: "This is a description of project1" },
  { project: "project2", details: "This is a description of project2" },
  { project: "project3", details: "This is a description of project3" },
];

var links = [
  { name: "GitHub", hyperlink: "https://www.github.com" },
  { name: "LinkedIn", hyperlink: "https://www.linkedin.com" },
  { name: "Twitter", hyperlink: "https://twitter.com" },
  { name: "Facebook", hyperlink: "https://www.facebook.com" },
];

module.exports = {
  getAllStaff,
  getCompanyHistory,
  getLinks,
};

function getAllStaff() {
  return staff;
}

function getCompanyHistory() {
  return companyHistory;
}

function getLinks() {
  return links;
}
