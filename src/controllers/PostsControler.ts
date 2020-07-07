import { Request, Response } from "express";
import ListPostsfromCompany from "../services/ListPostsfromCompany";
class PostsController {
  async show(request: Request, response: Response): Promise<Response> {
    const listPostsfromCompany = new ListPostsfromCompany();
    const { name } = request.body;

    const posts = await listPostsfromCompany.execute(name);
    return response.json(posts);
  }
}

export default PostsController;
