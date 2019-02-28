CREATE database todo;

CREATE TABLE todoList (
    todoId INTEGER AUTO_INCREMENT,
    todoItem VARCHAR(255) NOT NULL UNIQUE,
    todoDateAdded DATE NOT NULL,
    todoStatus BOOL NOT NULL,
    todoDueBy DATE,
    PRIMARY KEY (todoId)
)