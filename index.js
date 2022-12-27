const server = require("express");
const app = server();
const envFile = require("dotenv");
envFile.config();
const dbMongo = require("mongoose");
const userRouter = require("./routerUser/userDB");
dbMongo
  .connect(process.env.CONNECT)
  .then(() => {
    console.log("DB connecting Successfuly");
  })
  .catch(() => {
    console.log("DB not connection");
  });
app.use(server.json());
app.use("/Api", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server running in port:", process.env.PORT);
});
