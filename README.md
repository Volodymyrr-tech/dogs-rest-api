# Dog House Service API

This is a RESTful API for managing dog records in a dog house service. It provides endpoints for creating dogs, querying dogs, and performing various operations on dog records.

## Features

- Create a new dog: Allows you to add a new dog to the dog house service.
- Query dogs: Retrieve a list of dogs with optional sorting and pagination.
- Error handling: The API is designed to handle errors gracefully and provide meaningful error messages.
- Connect to Database: The API automatically connects and creates initial records in dogs table if there is no initial records. The database is hosted on Azure.

## Technologies Used

- Node.js: A JavaScript runtime for server-side development.
- Express.js: A web application framework for Node.js.
- Sequelize: An ORM (Object-Relational Mapping) library for database management.
- Ms SQL Database: The API is designed to work with SQL database for storing dog records.

## Getting Started

## Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.
- A SQL database should be set up and the connection string should be provided in the `db.js` file.

### Installation

1. Clone the repository:
  git clone https://github.com/Volodymyrr-tech/dog-rest-api.git

2. Install the dependencies:
  npm install

3. Run the application:
  npm run dev

The API will be accessible at http://localhost:3000.

## API Endpoints:
    GET /ping: Retrieves the version of the dog house service.
    GET /dogs: Retrieves a list of dogs with optional sorting and pagination.
    POST /dog: Add a new dog.
    POST /dogs/batch: Add multiple dogs at once.
    
The API is designed to handle errors gracefully and provide meaningful error messages. If an error occurs, an appropriate HTTP status code and error message will be returned in the response.


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
