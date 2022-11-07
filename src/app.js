import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from "fs";
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// autoload route
readdirSync("./src/routes").forEach((route) => {
  app.use("/api", require(`./routes/${route}`));
});

// // connect db
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connect successfully"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port", PORT));

// app.use("/api", productRouter)
// app.use("/api", authRouter)
// app.use("/api", cateRouter)
// //connection db
// mongoose
//   .connect("mongodb://127.0.0.1:27017/we16304")
//   .then(() => console.log("kets noi thanh cong"))
//   .catch((error) => console.log(error));

// // connect
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log("Server của bạn đang chạy cổng ", PORT);
// });
