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
   - Logger Configuration: Logs messages to a custom logger instance defined in ./config/logger.js.

3. config folder set up --> database.js and logger.js files

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

   _logger.js file_

   - Install Winston

     - Ensure Winston is installed in the Node.js project

   - Logger Configuration

     - Modify the transports array in the config/logger.js file to specify the desired log filenames and severity levels.
     - Customize the log filenames, levels, and formats according to the project requirements.

   - Usage

     - Import the Logger instance in the application where logging functionality is required.
     - Use the Logger instance to log messages at different severity levels (info, error, etc.).

   - Dependencies
     - Winston: A versatile logging library for Node.js applications.

4. module folder --> client.js file

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

5. router folder --> route.js file

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

6. CURD_Operation.js file

   - Install Dependencies

     - Ensure all required dependencies are installed in your Node.js project

   - Controller Configuration

     - Customize the controller functions in the CURD_Operation.js file according to the application's requirements.
     - Modify the database model imports (require("./module/client")) and logger imports (require('./config/logger')) as necessary.

   - Usage

     - Import the controller functions (getById, post, put, deletData) in the Express router file (router/route.js) to handle corresponding HTTP requests.

   - Dependencies
     - Sequelize: A powerful Node.js ORM for PostgreSQL, MySQL, SQLite, and other databases (if used for database operations).
     - Winston: A versatile logging library for Node.js applications (if used for logging).

7. package.json file

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
   - index.js:

     - This is the entry point of the application.
     - It initializes the Express application and sets up middleware (such as body-parser, morgan).
     - It imports required modules (express, body-parser, morgan, etc.).
     - It connects to the PostgreSQL database using Sequelize.
     - It defines routes by importing the router from router/route.js.
     - It starts the Express server to listen for incoming requests on a specified port.

   - config/database.js:

     - This file exports a Sequelize instance configured to connect to the PostgreSQL database.
     - It defines the database credentials (username, password, host, dialect) required for establishing the connection.

   - config/logger.js:

     - This file exports a Winston logger instance.
     - It configures the logger to write logs to separate files based on the log level (info.log for info logs and error.log for error logs).

   - CURD_Operation.js:

     - This file exports controller functions for handling CRUD operations.
     - It defines functions like getById, post, put, deletData, each corresponding to a CRUD operation.
     - Each function interacts with the database (using Sequelize models) to perform the respective CRUD operation.
     - It also logs relevant information using the Winston logger instance.

   - module/client.js:

     - This file exports a Sequelize model definition for the client table in the database.
     - It defines the structure of the client table, including attributes like name, email, password, etc.

   - router/route.js:

     - This file exports an Express router instance.
     - It defines route handlers for different HTTP endpoints.
     - It imports controller functions from CURD_Operation.js and assigns them to corresponding routes (GET, POST, PUT, DELETE).
