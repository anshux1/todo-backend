import { todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(title)
    const response = await todo.create({
      title: title,
      description: description,
    });
    res.status(200).json({
      success: true,
      data: response,
      message: "todo created successfully",
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
