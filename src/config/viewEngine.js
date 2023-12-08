import express from "express"; // <=> var express = require("express")

let configViewEngine = (app) => {
  //quy định client có thể truy cập file ở đây
  app.use(express.static("./src/public"));
  app.set("view engine", "ejs"); //jsp, blade
  app.set("views", "./src/views"); //casc file client phải được viết trong views
};
module.exports = configViewEngine;
