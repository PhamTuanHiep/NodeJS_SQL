import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import { getAboutPage } from "../controllers/homeController";

let router = express.Router(); // quy dinh dan duong

//viet cac route tai day
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = initWebRoutes;
