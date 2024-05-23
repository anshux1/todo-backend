import { todo } from "../models/todo.js";

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id)
    const { title, description, completed } = req.body;
    const todos = await todo.findByIdAndUpdate(
      { _id: id },
      { title, description, completed, updatedAt: Date.now() }
    );
    console.log(todos)
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
