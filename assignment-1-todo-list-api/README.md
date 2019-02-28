# assignment-1-todo-list-api
This is the folder for the Assignment 1 project

Create a new item
http POST https://todolist-iqmct3h3t.now.sh < mocks/post.json
http POST https://todolist-iqmct3h3t.now.sh todoItem="Complete Assignment 1 for Server-Side Scripting class" todoStatus=true todoDueBy=2019-02-28

Update an item
http PUT https://todolist-iqmct3h3t.now.sh < mocks/put.json
http PUT https://todolist-iqmct3h3t.now.sh todoId=6 todoItem="Updating an item in the todo list" todoStatus=true todoDueBy="2019-03-30"

List All items
http GET https://todolist-iqmct3h3t.now.sh

Get one item by id
http GET https://todolist-iqmct3h3t.now.sh < mocks/get.json
http GET https://todolist-iqmct3h3t.now.sh todoId=6

Delete an item
http DELETE https://todolist-iqmct3h3t.now.sh < mocks/delete.json
http DELETE https://todolist-iqmct3h3t.now.sh todoId=6

Ps.: I didn't use TEXT for the todoItem column because it is not possible to create an index for this column type
