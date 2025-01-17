# To-Do List Application

## Overview

This To-Do List Application is a full-featured web application designed for managing daily tasks with CRUD (Create, Read, Update, Delete) functionality. It allows users to register, log in, and manage a personalized to-do list with a user-friendly interface. The application is developed using HTML, CSS, JavaScript, SQLite, and Material UI for enhancing visual appeal. It is fully responsive and implements user authentication and data validation for secure usage.

hosted app link: 

## Features
* User Authentication:

** Users can register and log in with their credentials to securely access their to-do list.
** User sessions are authenticated and authorized using user credentials.

## To-Do List CRUD Operations:

* Users can create, read, update, and delete tasks on their to-do list.
* Tasks include a description and a priority level.

## Priority Management:

* Tasks are assigned a priority (High, Medium, Low) with corresponding color indicators:
** High: Red
** Medium: Yellow
** Low: Green

## Search Functionality:

* Users can search for tasks by entering keywords in a search bar.

## Material UI Integration:

* The app integrates Material UI components to provide a modern, sleek design and an intuitive user experience.

## Data Persistence:

* User and task data is stored in an SQLite database, ensuring that tasks are persistent across sessions.

## Responsive Design:

* The application is responsive, meaning it works across various devices, including desktops, tablets, and smartphones.

## Pages
1. Login Page

* The login page allows users to securely log in to their accounts using their username and password.
* Form validation ensures that users enter valid credentials.
* If the user provides incorrect credentials, appropriate error messages are displayed.


2. Registration Page

* New users can register for the application by providing the following details:
** Username: Unique username for logging in.
** Password: Secure password.

* The page validates both fields and ensures the user provides a valid username and strong password.

3. Home Page

* The home page is the main interface where users can manage their to-do list.
* Displays the list of tasks, with task descriptions and priority levels color-coded for easy identification


## To-Do List Features

1. Search Function

* Users can enter a keyword to search for specific tasks in their to-do list.
* Search results dynamically filter and display the matching tasks.

2. Add Function

* Users can add new tasks to their to-do list.
* Each task contains the following details:
** Task Description: A brief description of the task.
** Priority: Users can select between High, Medium, or Low priority.
* The task is saved in the SQLite database and displayed on the home page.
* Input validation is used to ensure that all required fields are filled.


3. Delete Function

* Users can delete any task from their list by clicking a delete button associated with each task.
* Once deleted, the task is removed from both the UI and the SQLite database.


4. Update Function

* Users can edit the details of an existing task, such as modifying the task description or changing its priority level.
* Updated tasks are saved back to the SQLite database.

5. Priority Colors

* Priority levels are visually represented with colors:
* High Priority (Red): Tasks that need immediate attention.
* Medium Priority (Yellow): Tasks of moderate importance.
* Low Priority (Green): Tasks that are less urgent.


## Technologies Used

* HTML5: Structuring the web pages.
* CSS3: Styling and layout of the user interface.
* JavaScript: Handling dynamic functionality, user interaction, and validation.
* SQLite: Storing user data and to-do list items persistently.
* Material UI: Providing pre-designed UI components and enhancing the visual appearance of the application.
* Node.js (optional): Backend implementation to handle server-side logic (if required).


## Installation & Setup

1. Clone the repository:

```bash

git clone [https://github.com/your-repository-url](https://github.com/Asiphile1/To-do-list-app-codetribe)
```
cd todo-list-app

2. Set up the database:

Run the server where database users and tasks are stored.

```bash
json-server --watch db.json --port 5000
```

3. Install dependencies:

```bash
Copy code
npm install
```

4. Run the application:

```bash
Copy code
npm start
```

5. Open the app:
Open index.html in your web browser to view the app.


## Database Structure

### Users Table

| Column    | Type    | Description            |
|-----------|---------|------------------------|
| id        | INTEGER | Unique user ID         |
| username  | TEXT    | Username for login     |
| password  | TEXT    | User's hashed password |

Database Structure
Users Table
### Tasks Table

| Column      | Type    | Description                 |
|-------------|---------|-----------------------------|
| id          | INTEGER | Unique task ID              |
| user_id     | INTEGER | ID of the user who owns the task |
| description | TEXT    | Task description            |
| priority    | TEXT    | Task priority (High/Medium/Low) |
| created_at  | TEXT    | Timestamp of task creation  |
| updated_at  | TEXT    | Timestamp of last update    |


## Validation and Error Handling

* Login Validation: Ensures that the username and password are correct during login attempts. Proper error messages are displayed for failed attempts.
* Registration Validation: Ensures that new users provide a unique username and a strong password.
* Task Validation: When adding or editing tasks, checks are in place to ensure that the task description is not empty and a valid priority is selected.
* Error Handling: The app gracefully handles errors such as database connection issues, missing fields, and invalid inputs, providing user-friendly error messages.

## Security

* Password Hashing: User passwords are hashed before being stored in the database to ensure security.
* Authentication: Users must log in before accessing the to-do list, ensuring that only authenticated users can manage their tasks.
* Authorization: User-specific to-do lists ensure that each user can only view and manage their own tasks.


## Future Enhancements

* Notifications: Adding reminders for tasks with deadlines.
* Drag-and-Drop Feature: Allowing users to prioritize tasks by dragging and dropping them in order.
* Multi-User Collaboration: Allowing multiple users to share and collaborate on to-do lists.
* Improved UI/UX: Further enhancing the interface with animations and additional Material UI components.

# Screenshots 
![Image](https://github.com/user-attachments/assets/49af464f-4884-481c-8046-166796de5c6d)


![Image](https://github.com/user-attachments/assets/2b34deff-cf32-4d72-a03d-f23dd7048659)


![Image](https://github.com/user-attachments/assets/477bd397-b103-42e3-bfc9-fbfb29c4f5e2)

This To-Do List Application offers a full suite of task management features, including user authentication, CRUD operations, and a modern interface enhanced with Material UI. With its focus on responsiveness, ease of use, and security, this application is suitable for personal and professional use.
