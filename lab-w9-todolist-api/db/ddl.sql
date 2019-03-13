CREATE database todo;

CREATE TABLE projects (
    projectID INTEGER AUTO_INCREMENT NOT NULL,
    projectName VARCHAR(255) NOT NULL,
    projectDescription TEXT NOT NULL,
    PRIMARY KEY (projectID),
    INDEX (projectName)
);

CREATE TABLE todoItems (
    todoID INTEGER AUTO_INCREMENT NOT NULL,
    todoItem VARCHAR(255) NOT NULL,
    dateCreated DATETIME NOT NULL DEFAULT now(),
    todoStatus TEXT NOT NULL,
    projectID INT NOT NULL,
    PRIMARY KEY (todoId),
    INDEX (todoItem),
    FOREIGN KEY (projectID)
        REFERENCES projects(projectID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);