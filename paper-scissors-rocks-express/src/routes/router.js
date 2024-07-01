import express from "express";
import MainController from "../controllers/mainController.js";

const route = express.Router();
const mainController = new MainController();

route.get("/users/:email", mainController.read);

export default route;
