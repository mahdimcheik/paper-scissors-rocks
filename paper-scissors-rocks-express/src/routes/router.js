import express from "express";
import MainController from "../controllers/MainController.js";

const route = express.Router();
const mainController = new MainController();

// route.get("/users/:email", mainController.read);
route.post("/add", mainController.add);
route.post("/login", mainController.login);
route.post("/update", mainController.update);

export default route;
