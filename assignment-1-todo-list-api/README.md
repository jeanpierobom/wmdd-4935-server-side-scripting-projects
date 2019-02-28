# assignment-1-todo-list-api
This is the folder for the Assignment 1 project.

## API

Examples on how to use the API:

### Create a new item
```console
http POST https://todolist-iqmct3h3t.now.sh < mocks/post.json
```
```console
http POST https://todolist-iqmct3h3t.now.sh todoItem="Complete Assignment 1 for Server-Side Scripting class" todoStatus=true todoDueBy=2019-02-28
```

### Update an item
```console
http PUT https://todolist-iqmct3h3t.now.sh < mocks/put.json
```
```console
http PUT https://todolist-iqmct3h3t.now.sh todoId=8 todoItem="Updating an item in the todo list" todoStatus=true todoDueBy="2019-03-30"
```

### List All items
```console
http GET https://todolist-iqmct3h3t.now.sh
```

### Get one item by id
```console
http GET https://todolist-iqmct3h3t.now.sh < mocks/get.json
```
```console
http GET https://todolist-iqmct3h3t.now.sh todoId=8
```

### Delete an item
```console
http DELETE https://todolist-iqmct3h3t.now.sh < mocks/delete.json
```
```console
http DELETE https://todolist-iqmct3h3t.now.sh todoId=8
```

Ps.: I didn't use TEXT for the todoItem column because it is not possible to create an index for this column type
