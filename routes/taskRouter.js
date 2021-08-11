const { Router } = require("express");
const {
  getTaskByTaskID,
  getAllTasks,
  addTask,
  updateTask,
  addValidation,
  deleteTask,
} = require("../controllers/taskController");

const taskRouter = Router();
taskRouter.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
taskRouter.route("/").get(getAllTasks).post(addValidation, addTask);
taskRouter
  .route("/:taskid")
  .get(getTaskByTaskID)
  .put(addValidation, updateTask)
  .delete(deleteTask);
module.exports = taskRouter;
