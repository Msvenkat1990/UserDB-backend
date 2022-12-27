const dbMongo = require("mongoose");
const userData = new dbMongo.Schema({
  Rollno: {
    type: Number,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  MobileNo: {
    type: Number,
    require: true,
  },
});
module.exports = dbMongo.model("UserDB", userData);
