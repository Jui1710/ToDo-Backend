# ToDo-Backend

This is a backend for a ToDo application.
<br>
The user can:

1.  Fetch all Tasks
2.  Fetch a Specific Task
3.  Add new Task
4.  Update a Task
5.  Delete a Task

REST APIs are created to perform the above operations. The project is build using ExpressJS framework of NodeJS.

## Requirements/Installation

Make sure Node and Npm are installed(Refrence for installation: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are installed on your machine.
Open the terminal, enter the following commands:
<br>

```bash
git clone https://github.com/Jui1710/ToDo-Backend.git
cd ToDo-Backend
npm init
node run dev
```

## Usage


To use the application, install Postman (Refrence for Installation: https://learning.postman.com/docs/getting-started/installation-and-updates/).

1. To fetch all Tasks:<br>
   Method: GET<br>
   RequestUrl: http://localhost:3000/tasks<br>

2. To fetch a specific Task: <br>
   Method: GET<br>
   RequestUrl: http://localhost:3000/tasks/(Enter the taskid you want to fetch)<br>
   ExampleUrl: http://localhost:3000/tasks/9vfju62ks7rqedw <br>

3. To add new Task:<br>
   Method: POST<br>
   RequestUrl: http://localhost:3000/tasks<br>
   Request Body:<br>
   (send raw json data)<br>
   Structure:<br>
   ```json
   {
     "content": "task description"
   }
   ```
4. To update a Task:<br>
   Method:PUT<br>
   RequestUrl: http://localhost:3000/tasks/(Enter the taskid you want to fetch)<br>
   ExampleUrl: http://localhost:3000/tasks/9vfju62ks7rqedw<br>
   Request Body:<br>
   (send raw json data)<br>
   Structure:<br>
   ```json
   {
     "content": "task description",
     "isComplete": "boolean value(true/false)"
   }
   ```
5. To delete a Task: <br>
   Method: DELETE <br>
   RequestUrl: http://localhost:3000/tasks/(Enter the taskid you want to fetch) <br>
   ExampleUrl: http://localhost:3000/tasks/9vfju62ks7rqqyv <br>

## Documentation


### Task Structure

```json
{
  "taskId": "unique id",
  "content": "task description",
  "isComplete": "true/false"
}
```

### Folder Structure

```
.
├── app.js                             ---main js file
├── controllers
│   └── taskController.js              ---all request handlers
├── data
│   └── tasks.json                     ---storage
├── models
│   └── taskModel.js                   ---task constructor
├── package.json
├── package-lock.json
├── README.md
├── routes
│   └── taskRouter.js                  ---all routes
├── structure.txt
└── utils
    └── sendResponse.js                ---response function

```
