import { todo } from "../models/todo.js";

export const getTodos = async (req, res) => {
  try {
    const id = req.params.id;
    const todos = id ? await todo.find({ _id : id}) : await todo.find({});
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
