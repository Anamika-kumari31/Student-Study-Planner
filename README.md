# Student Study Planner
A simple and responsive web application that helps students organize, manage, and track their study tasks.

## Project Overview

Student Study Planner is a frontend-based task management application developed using HTML, CSS, and JavaScript. It allows students to add study tasks with subject, date, and priority, and track their completion status.

The project focuses on creating a simple, responsive, and user-friendly interface while applying core frontend development concepts.

## Features
- Add study tasks
- Add subject, date, and priority
- Mark tasks as completed or pending
- Undo completed tasks
- Delete tasks
- Search tasks by task name or subject
- Filter tasks by status
- Filter tasks by priority
- Display total, completed, and pending task counts
- Store tasks using browser localStorage
- Responsive layout for mobile devices

## Technologies Used

- HTML5 – Structure of the application
- CSS3 – Styling and responsive design
- JavaScript – Application logic and interaction
- Browser localStorage – Persistent task storage
- GitHub – Version control and project hosting

## Project Structure

```text
Student-Study-Planner/
│
├── index.html
├── style.css
├── script.js
└── README.md

index.html
Defines the structure of the Student Study Planner interface, including the task form, filters, statistics, and task list.

style.css
Controls the visual appearance, spacing, layout, buttons, task cards, and responsive design.

script.js
Handles task creation, completion, deletion, searching, filtering, statistics, and localStorage operations.

## Architecture / Approach
The project follows a simple separation-of-concerns approach:
- HTML manages the structure and content.
- CSS manages presentation and responsive layout.
- JavaScript manages application behavior and data processing.
- localStorage acts as the browser-based data persistence layer.

JavaScript functions such as `addTask()`, `displayTasks()`, `completeTask()`, `deleteTask()`, and `updateStats()` divide the application logic into smaller and reusable operations.

Event listeners are used for search and filter interactions, making the application event-driven.

Data Storage
Task information is stored in the browser's localStorage using JavaScript.
This allows tasks to remain available even after refreshing the browser page.

Each task contains:

Task name
Subject
Date
Priority
Completion status
Unique ID

Setup and Onboarding

Requirements
A web browser
Visual Studio Code
Live Server extension
GitHub account

Setup Steps
Create a project folder named Student-Study-Planner.
Open the folder in Visual Studio Code.
Create index.html, style.css, and script.js.
Add the required HTML, CSS, and JavaScript code.
Open index.html using Live Server.
Test the application in a web browser.
Create a GitHub repository and upload the project files.

How to Run
Download or clone the repository.

Open the project folder in Visual Studio Code.

Open index.html using Live Server.

The Student Study Planner will open in the browser.

Testing
The application was tested for:

Adding tasks
Completing and undoing tasks
Deleting tasks
Searching tasks
Filtering by status
Filtering by priority
Updating task statistics
Data persistence after browser refresh
Mobile responsive layout

Challenges and Solutions
Task Data Persistence
Initially, tasks could disappear after refreshing the page. This was solved by using browser localStorage to save and retrieve task data.

Task Filtering
Different filtering requirements were handled using JavaScript filter conditions for search text, task status, and priority.

Responsive Layout
CSS media queries were added to ensure that the interface adapts to smaller screen sizes.

Best Practices Applied
Separate HTML, CSS, and JavaScript files
Meaningful IDs and function names
Reusable JavaScript functions
Input validation
Responsive design
Local data persistence
Regular browser testing

Learning Outcomes
Through this project, I learned how to:
Build a complete frontend web application
Structure a webpage using HTML
Style and make layouts responsive using CSS
Use JavaScript for dynamic functionality
Work with arrays and objects
Use DOM manipulation
Handle user events
Store data using localStorage
Test a web application
Use GitHub for project hosting and documentation

Conclusion
The Student Study Planner demonstrates the practical application of core frontend development concepts. The project combines HTML, CSS, JavaScript, responsive design, event handling, filtering, and localStorage to create a useful study management application.




