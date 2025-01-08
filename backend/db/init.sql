CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (username, title, description, status, due_date)
VALUES
	('user1', 'Task 1', 'Description 1', 'to-do', '2021-12-31'),
	('user1', 'Task 2', 'Description 2', 'pending', '2021-12-31'),
	('user2', 'Task 3', 'Description 3', 'in-progress', '2021-12-31'),
	('user2', 'Task 4', 'Description 4', 'pending', '2021-12-31');
