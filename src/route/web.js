import express from "express";

let router = express.Router(); // quy dinh dan duong

//viet cac route tai day
let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("Hello wordld with TH");
  });
  return app.use("/", router);
};

module.exports = initWebRoutes;
