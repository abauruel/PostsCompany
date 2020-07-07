import { Router } from "express";
import PostsController from "./controllers/PostsControler";
const routes = Router();
const postsController = new PostsController();

routes.get("/companies", postsController.show);

export default routes;
