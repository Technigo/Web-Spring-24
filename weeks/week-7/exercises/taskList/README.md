# Tasks List

In this exercise you will create a project that will get and post data from an API. Note that this is an example project.

## Context:

To achieve this, we've built an API to collect 'tasks' with three endpoints. Note that all of the tasks you write will show up for everyone - this is a public API that you all will share.

## Fetch tasks

`GET https://week-7-backend.onrender.com/tasks`

This will return the tasks from the API, looking something like this:

```json
[
  {
    "isChecked": false,
    "_id": "633ad6b9e44296b1fc668718",
    "description": "Superrr test",
    "date": 1664800441224,
    "__v": 0
  },
  {
    "isChecked": false,
    "_id": "633c03ee9e34ed001612707b",
    "description": "jhsdskjahdkjash\"",
    "date": 1664877550966,
    "__v": 0
  }
]
```

## Create a task

`POST https://week-7-backend.onrender.com/tasks`

Send a POST request with a JSON body like this:

```json
{
  "description": "create a project"
}
```

If the request was successful and a task was added, you'll get a response that looks like this:

```json
{
  "isChecked": false,
  "_id": "65422e1fa9d9fd002864a433",
  "description": "create a project",
  "date": 1698835999215,
  "__v": 0
}
```

# Check a task

`POST <https://week-7-backend.onrender.com/tasks/:id/check>`

Create a checkbox for every task. When the user checks the box on a task, send a POST request (with no body) to this URL. Replace :id with the \_id parameter of the task the user clicked on

Can you figure out the JSON body of this post request?

# Requirements:

- Your page should have a user-friendly UI and follow the accessibility guidelines
- You should have a form to post new tasks
- You should list the most recent tasks at the top and older tasks at the bottom (sorted)
- Your tasks should show the description
- Your tasks should show when it was added (you can use `date-fns`, a dependency installed in this project)
- You should implement the checkbox to check a task
- Your page should be responsive

## Tip

Use Lighthouse, a Chrome Extension automated tool for improving the performance, quality, and correctness of your web apps.
It has audits for performance, accessibility, progressive web apps, SEO, and more!
