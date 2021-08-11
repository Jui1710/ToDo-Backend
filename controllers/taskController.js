// contains all the request handlers
const fs = require("fs");
const path = require("path");
const dataSource = path.join(__dirname, "..", "data", "tasks.json");
const Tasks = JSON.parse(fs.readFileSync(dataSource, "utf-8"));
const Task = require("../models/taskModel");
const sendResponse = require("../utils/sendResponse");

const getAllTasks = (req, res, next) => {
  sendResponse({
    res,
    statusCode: 200,
    message: "Succesfully fetched all Tasks",
    data: Tasks,
  });
};

const getTaskByTaskID = (req, res, next) => {
  let { taskid } = req.params;
  let foundTask = Tasks.find((task) => task.taskId === taskid);
  if (!foundTask) {
    return sendResponse({
      res,
      statusCode: 404,
      message: "Task doesnot exist",
      error: "OutofIndex",
    });
  }

  return sendResponse({
    res,
    statusCode: 200,
    message: `Succesfully fetched task`,
    data: foundTask,
  });
};

const addTask = (req, res, next) => {
  const task = new Task(req.body);
  Tasks.push(task);
  fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), "utf-8", (err) => {
    if (err) {
      Tasks.pop();
      return sendResponse({
        res,
        statusCode: 500,
        message: "Error in adding task",
        error: err,
      });
    }
    return sendResponse({
      res,
      statusCode: 200,
      message: "Succesfully created new task",
      data: task,
    });
  });
};

const addValidation = (req, res, next) => {
  let validKeys = ["content"];
  if (req.params.taskid) {
    validKeys.push("isComplete");
  }
  const keys = Object.keys(req.body);
  const check = (keys, validKeys) =>
    validKeys.every((key) => keys.includes(key));
  if (!check(keys, validKeys)) {
    return sendResponse({
      res,
      statusCode: 400,
      message: "Bad Request",
      error: "Bad Request",
    });
  } else next();
};

const updateTask = (req, res, next) => {
  let { taskid } = req.params;
  let foundTask = Tasks.find((task) => task.taskId === taskid);
  if (!foundTask) {
    return sendResponse({
      res,
      statusCode: 404,
      message: "Task doesnot exist",
      error: "OutofIndex",
    });
  }

  foundTask = Object.assign(foundTask, req.body);

  fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), "utf-8", (err) => {
    if (err) {
      return sendResponse({
        res,
        statusCode: 500,
        message: "Error in updating task",
        error: err,
      });
    }
    return sendResponse({
      res,
      statusCode: 200,
      message: "Succesfully updated task",
      data: foundTask,
    });
  });
};

const deleteTask = (req, res, next) => {
  let { taskid } = req.params;
  let index = Tasks.findIndex((task) => {
    return task.taskId === taskid;
  });
  if (index === -1) {
    return sendResponse({
      res,
      statusCode: 404,
      message: "Task doesnot exist",
      error: "OutofIndex",
    });
  }
  Tasks.splice(index, 1);
  fs.writeFile(dataSource, JSON.stringify(Tasks, null, 2), (err) => {
    if (err) {
      return sendResponse({
        res,
        statusCode: 404,
        message: "Error while deleting",
        error: "Error while deleting",
      });
    }
  });
  return sendResponse({
    res,
    statusCode: 204,
    message: "Succesfully deleted",
    data: "None",
  });
};

module.exports = {
  getAllTasks,
  getTaskByTaskID,
  addTask,
  addValidation,
  updateTask,
  deleteTask,
};
