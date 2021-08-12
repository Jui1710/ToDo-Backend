// function or class for new objects of Task
const uniqid = require("uniqid");
function Task({ content, createdAt }) {
  this.taskId = uniqid();
  this.content = content;
  this.isComplete = false;
  this.createdAt = createdAt;
  this.updatedAt = null;
}

module.exports = Task;
