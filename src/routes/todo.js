import { createTodo } from "../controllers/createTodo.js";
import { Router } from "express";
import { getTodos } from "../controllers/getTodos.js";
import { updateTodo } from "../controllers/updateTodo.js";
import { deleteTodo } from "../controllers/deleteTodo.js";
const router = Router();

router
    .post('/todo', createTodo)
    .get('/todo', getTodos)
    .get('/todo/:id', getTodos)
    .put('/todo/:id', updateTodo)
    .delete('/todo/:id', deleteTodo)
export default router