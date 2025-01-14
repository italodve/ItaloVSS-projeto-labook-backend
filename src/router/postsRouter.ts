import express  from "express";
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { TokenManager } from '../services/TokenManager'

export const postsRouter = express.Router()


const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new TokenManager()
    )
)

postsRouter.get("/", postController.getPost)
postsRouter.post("/", postController.createPost)
postsRouter.put("/:id", postController.editPost)
postsRouter.delete("/:id", postController.deletePost)
postsRouter.put("/:id/like", postController.likeOrDislikePost)
