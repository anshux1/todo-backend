import { todo } from "../models/todo.js";

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await todo.findByIdAndDelete({_id: id})
    res.status(200).json({
      success: true,
      data: {},
      message: "todo deleted successfully",
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

