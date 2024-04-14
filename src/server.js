import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require("dotenv").config(); // run line: port = precess.....

let app = express();
app.use(cors({ credentials: true, origin: true }));
// const corsOptions = {
//   origin: "http://localhost:8080",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.use(cors({ origin: true }));
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();
//Port === undefinend -> port= 6969
let port = process.env.PORT || 6969;

// run app
app.listen(port, () => {
  //call back
  console.log("Backend NodeJs is running on the port: " + port);
});
