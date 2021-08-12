# ToDo-Backend

This is a backend for a ToDo application.
<br>
The user can:

1.  Fetch all Tasks
2.  Fetch a Specific Task
3.  Add new Task
4.  Update a Task
5.  Delete a Task

REST APIs are created to perform the above operations. The project is built using ExpressJS framework of NodeJS.

## Requirements/Installation

Make sure Node and Npm [Refrence for installation]:(https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are installed on your machine.
Open the terminal, enter the following commands:
<br>

```bash
$ git clone https://github.com/Jui1710/ToDo-Backend.git
$ cd ToDo-Backend
$ npm install
$ npm run start
```

## Usage

To use the application, install Postman (Refrence for Installation: https://learning.postman.com/docs/getting-started/installation-and-updates/).

#### 1. To fetch all Tasks:<br>

**Method:** GET<br>
**RequestUrl:** (localhostUrl)/tasks<br>
**ExampleUrl:** http://localhost:3000/tasks<br>
**Response:**<br>
_On success:_<br>

```json
{
  "message": "Succesfully fetched all Tasks",
  "data": [
    {
      "taskId": "9vfje3eks8umn4g",
      "content": "Task1",
      "isComplete": false,
      "createdAt": "Some Date",
      "updatedAt": null
    },
    {
      "taskId": "9vfje3eks8umrpd",
      "content": "Task2",
      "isComplete": false,
      "createdAt": "Some Date",
      "updatedAt": null
    }
  ]
}
```

#### 2. To fetch a specific Task: <br>

**Method:** GET<br>
**RequestUrl:** (localhostUrl)/tasks/:taskid<br>
**ExampleUrl:** http://localhost:3000/tasks/9vfju62ks7rqedw <br>
**Response:**<br>
_On success:_<br>

```json
{
  "message": "Succesfully fetched task",
  "data": {
    "taskId": "9vfje3eks8umrpd",
    "content": "Task2",
    "isComplete": false,
    "createdAt": "Some Date",
    "updatedAt": null
  }
}
```

#### 3. To add new Task:<br>

**Method:** POST<br>
**RequestUrl:** (localhostUrl)/tasks<br>
**ExampleUrl:** http://localhost:3000/tasks<br>
**Request Body:**<br>
_(send raw json data or urlencoded data)_<br>
**Structure:**<br>

```json
{
  "content": "task description",
  "createdAt": "current date"
}
```

**Response:**<br>
_On success:_<br>

```json
{
  "message": "Succesfully created new task",
  "data": {
    "taskId": "9vfjhjwks8y9csl",
    "content": "Task15",
    "isComplete": false,
    "createdAt": "some date",
    "updatedAt": null
  }
}
```

#### 4. To update a Task:<br>

**Method:**PUT<br>
**RequestUrl:** (localhostUrl)/tasks/:taskid<br>
**ExampleUrl:** http://localhost:3000/tasks/9vfju62ks7rqedw<br>
**Request Body:**<br>
_(send raw json data or urlencoded data)_<br>
**Structure:**<br>

```json
{
  "content": "task description",
  "isComplete": "boolean value(true/false)",
  "updatedAt": "current date"
}
```

**Response:**<br>
_On success:_<br>

```json
{
  "message": "Succesfully updated task",
  "data": {
    "taskId": "9vfje3eks8umw6i",
    "content": "updatedTask",
    "isComplete": "true",
    "createdAt": "Some Date",
    "updatedAt": "somedate"
  }
}
```

#### 5. To delete a Task: <br>

**Method:** DELETE <br>
**RequestUrl:** (localhostUrl)/tasks/:taskid<br>
**ExampleUrl:** http://localhost:3000/tasks/9vfju62ks7rqqyv <br>

#### Common Responses:

_On incorrect body:_

```json
{
  "message": "Bad Request",
  "error": "Bad Request"
}
```

_When there is a problem in file system or Task does not exists:_

```json
{
  "message": "Related Message",
  "error": "Related error"
}
```

## Documentation

### Task Structure

```json
{
  "taskId": "unique id",
  "content": "task description",
  "isComplete": "true/false",
  "createdAt": "Date",
  "updatedAt": "Date"
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
