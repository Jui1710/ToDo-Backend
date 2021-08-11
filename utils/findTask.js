const fs = require("fs");
const path = require("path");
const dataSource = path.join(__dirname, "..", "data", "tasks.json");
const Tasks = JSON.parse(fs.readFileSync(dataSource, "utf-8"));

const findTask = (req, res) => {
  let { taskid } = req.params;
  let foundTask = Tasks.find((task) => task.taskId === taskid);
  if (!foundTask) {
    return;
  }
  return foundTask;
};

module.exports = findTask;
