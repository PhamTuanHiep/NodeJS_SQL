import express from "express";
import homeController from "../controllers/homeController";
import { getAboutPage } from "../controllers/homeController";
let router = express.Router(); // quy dinh dan duong

//viet cac route tai day
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);

  return app.use("/", router);
};

module.exports = initWebRoutes;
