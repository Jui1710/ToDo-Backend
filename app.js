const express = require("express");
const taskRouter = require("./routes/taskRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
