const express = require("express");
const {
  postData,
  getData,
  putData,
  deleteData,
} = require("../createData/userDB");

const userRouter = express.Router();
userRouter.post("/create", postData);
userRouter.get("/view", getData);
userRouter.put("/update/:id", putData);
userRouter.delete("/delete/:id", deleteData);

module.exports = userRouter;
