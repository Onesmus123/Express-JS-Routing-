# Express-JS-Routing-
Express Web Application with Working Hours Restriction
Description
This is a simple web application built using Node.js and Express.js, with EJS for templating and CSS for styling. The application consists of three pages: Home, Our Services, and Contact Us, each accessible via a navigation bar. Access to the application is restricted to working hours (Monday to Friday, 9am to 5pm).

Table of Contents

1. Installation
Clone the repository: git clone https://github.com/Onesmus123/express-app.git
Navigate to the project directory: cd express-app
Install dependencies: npm install

2. Usage
To start the server, run: node server.js
Access the application in your browser at http://localhost:3000 during working hours (Monday to Friday, 9am to 5pm).

3. Working Hours Restriction
The application includes middleware that restricts access based on the current day and time. Outside of Monday to Friday, 9am to 5pm, users attempting to access the application will see a message indicating its availability.

4. Directory Structure
public/: Contains static assets like CSS (styles.css).
views/: Holds EJS templates (home.ejs, services.ejs, contact.ejs) for each web page.
server.js: Express server file where routes and middleware are defined.

5. Credits
Node.js
Express.js
EJS
CSS

6. License
This project is licensed under the MIT License. See the LICENSE file for details.

7. Support
For questions or suggestions, please open an issue or contact mutyauvyudavid@gmail.com
