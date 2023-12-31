import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config(); // run line: port = precess.....

let app = express();

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
