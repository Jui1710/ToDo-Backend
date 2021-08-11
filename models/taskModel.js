// function or class for new objects of Task
const uniqid = require("uniqid");
function Task({ content }) {
  this.taskId = uniqid();
  this.content = content;
  this.isComplete = false;
}

// class Task {
//   constructor({ content }) {
//     if (this.isContentValid(content)) {
//       this.id = uniqid();
//       this.content = content;
//       this.isComplete = false;
//     } else {
//       return new Error("Invalid content Structure");
//     }
//   }
//   isContentValid = (content) => {
//     if (!content) {
//       return false;
//     }
//     return true;
//   };
// }

// let task = new Task({ content: "new task" });
// console.log(task);

module.exports = Task;
