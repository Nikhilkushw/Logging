\***\*\*\*\*\*** Implement Request Logging Middleware in Express \***\*\*\*\*\*\***

1. We install these packages

   - npm i express --> Express simplifies the creation of web applications in Node.js by providing a set of tools and features that handle common tasks like routing and middleware, making development faster and more efficient.
   - npm i body-parser --> It processes incoming request bodies, making it easier to handle POST and PUT requests
   - npm i morgan --> To log requests, errors, and more to the console.
   - npm i winston --> To write logs in code with support extending upto multiple transport
   - npm i sequelize --> Connect to a database and perform operations without writing raw SQL queries

2. index.js file setup

   _Install Dependencies_

   - npm install

   _Database Setup_

   - the database credentials in config/database.js.

   _Start the Server_

   - nodemon ./index.js

   _Features_

   - Express Server: Sets up an Express server to handle HTTP requests.
   - Body Parsing: Utilizes body-parser and express.json() middleware to parse incoming request bodies.
   - Database Connection: Connects to the database using Sequelize (assuming from the db.authenticate() call).
   - Logging with Morgan: Configures Morgan middleware to log HTTP requests with custom formatting and streams the logs to a Logger instance.
   - Router Integration: Integrates routes from ./router/route.js into the application.

   _Customizations_

   - Custom Morgan Format: Defines a custom logging format including method, URL, and timestamp.
   - Logger Configuration: Logs messages to a custom logger instance defined in ./utils/logger.js.

3. config/database.js -->

   _database.js file_

   - Install Sequelize

     - Ensure Sequelize is installed in the Node.js project

   - Database Configuration

     - Update the database credentials in the config/database.js file according to the PostgreSQL setup.
     - Modify the values for username, password, host, and dialect as per th PostgreSQL configuration.

   - _Usage_

     - Import the Sequelize instance in the application where database connectivity is required.
     - Use the instance to define models, perform database operations, and manage database connections.

   - _Dependencies_
     - Sequelize: A powerful Node.js ORM for PostgreSQL, MySQL, SQLite, and other databases.

4. utils/logger.js -->
   
   _logger.js file_

   - Install Winston

     - Ensure Winston is installed in the Node.js project

   - Logger Configuration

     - Modify the transports array in the utils/logger.js file to specify the desired log filenames and severity levels.
     - Customize the log filenames, levels, and formats according to the project requirements.

   - Usage

     - Import the Logger instance in the application where logging functionality is required.
     - Use the Logger instance to log messages at different severity levels (info, error, etc.).

   - Dependencies
     - Winston: A versatile logging library for Node.js applications.

5. module/client.js -->

   _client.js file_

   - Install Sequelize

     - Ensure Sequelize is installed in the Node.js project

   - Database Connection

     - Ensure a Sequelize instance (db) is created and configured in the config/database.js file.
     - The db instance should be properly connected to the PostgreSQL database.

   - Model Definition

     - Customize the client model definition in the models/client.js file according to the database schema.
     - Modify the attributes (name, email, password, etc.) and their data types as required.

   - Usage

     - Import the client model in the application where database operations related to clients are required.
     - Use the client model to perform CRUD operations (create, read, update, delete) on client data.

   - Dependencies

     - Sequelize: A powerful Node.js ORM for PostgreSQL, MySQL, SQLite, and other databases.

6. router/route.js -->

   - Install Express

     - Ensure Express is installed in the Node.js project

   - Router Configuration

     - Customize the router endpoints and corresponding controller functions in the router/route.js file according to the application's requirements.
     - Uncomment or modify the routes as needed to enable the desired CRUD operations.

   - Usage

     - Import the router (router) in the main Express application file (app.js or index.js).
     - Mount the router middleware at a specific base path in the application.

   - Endpoints

     - GET /: Retrieve data by ID.
     - POST /post: Create new data.
     - PUT /put/: Update data by ID.
     - DELETE /delete/: Delete data by ID.

   - Dependencies

     - Express: Web application framework for Node.js.

7. controllers/user.controller.js -->

   - Install Dependencies

     - Ensure all required dependencies are installed in the Node.js project

   - Controller Configuration

     - Customize the controller functions in the user.controller.js file according to the application's requirements.
     - Modify the database model imports (require("./module/client")) and logger imports (require('./utils/logger')) as necessary.

   - Usage

     - Import the controller functions (getUserById, createUser, updateUser, deleteUser) in the Express router file (router/route.js) to handle corresponding HTTP requests.

   - Dependencies
     - Sequelize: A powerful Node.js ORM for PostgreSQL, MySQL, SQLite, and other databases (if used for database operations).
     - Winston: A versatile logging library for Node.js applications (if used for logging).

8. package.json file

   - Dependencies

     - Express: Web application framework for Node.js.
     - Body-Parser: Middleware to parse incoming request bodies.
     - CORS: Middleware to enable Cross-Origin Resource Sharing.
     - Morgan: HTTP request logger middleware.
     - Params: Simple JavaScript utility for working with URL query parameters.
     - Path: Utility module to handle file paths.
     - pg: PostgreSQL client for Node.js.
     - pg-hstore: Serialize and deserialize JSON data to hstore format for PostgreSQL.
     - Sequelize: A promise-based Node.js ORM for PostgreSQL, MySQL, SQLite, and other databases.
     - Winston: A versatile logging library for Node.js applications.
_____________________________________________________________________________________________________________
