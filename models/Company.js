var staff = [
  { name: "John", age: 30, id: 1 },
  { name: "Sarah", age: 25, id: 2 },
  { name: "Ryan", age: 24, id: 3 },
  { name: "Michael", age: 41, id: 4 },
];

var companyHistory = [{}, {}, {}];

module.exports = {
  getAllStaff,
};

function getAllStaff() {
  return staff;
}
