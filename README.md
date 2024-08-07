To-Do List Application

Description

This is a React-based To-Do List application with three main pages: Login, Registration, and Home. The application supports user authentication and authorization, CRUD operations for to-do list items, priority levels with different colors, and uses SQL.js for storage. The UI is designed with Material UI components and features a background video.

Features

User Authentication: Users can register and log in to manage their to-do lists.

To-Do List Management: Users can add, update, delete, and search for to-do list items.

Priority Levels: To-do items can be categorized as High (Red), Medium (Yellow), or Low (Green) priority.

Responsive Design: The application is responsive and user-friendly.

Background Video: A background video is displayed throughout the app.

Material UI: The application uses Material UI components for a modern look and feel.


Installation

To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/your-username/to-do-list-app.git
cd to-do-list-app



Install dependencies:

npm install
Start the development server:



npm start
Open the app in your browser:


http://localhost:3000


Usage

Registration:

Navigate to the Registration page.

Enter a username and password to create a new account.
Login:

Navigate to the Login page.

Enter your username and password to log in.

Home:

Add new to-do items with a description and priority level.
Edit existing to-do items.
Delete to-do items.
Search for to-do items by keyword.



Project Structure


src/
|-- components/
|   |-- Home.js
|   |-- Login.js
|   |-- Registration.js
|   |-- TodoItem.js
|-- services/
|   |-- auth.js
|   |-- todoService.js
|-- App.js
|-- App.css
|-- index.js
|-- background.mp4



components/: Contains React components for the Login, Registration, Home, and TodoItem.

services/: Contains service files for authentication and to-do item management.

App.js: The main app component.

App.css: The main stylesheet.

index.js: The entry point of the application.

background.mp4: The background video file.


Dependencies

react
react-dom
react-router-dom
@mui/material
@mui/icons-material
sql.js


Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For questions or feedback, please contact asiphilemthethwa@gmail.com.

Feel free to customize this README to fit your specific project details and preferences.
