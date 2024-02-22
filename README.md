# Express.js Simple ERP

This project is an Express.js ERP application that is continously in development. It allows users to create, retrieve, update, and delete transactions.
Features

    Create Transactions: Users can add new transactions with details such as amount, type, and description.
    Retrieve Transactions: Users can fetch a list of transactions and view details of individual transactions.
    Update Transactions: Users can update existing transactions with new information.
    Delete Transactions: Users can delete transactions that are no longer needed.

## Getting Started

To get started with the project, follow these steps:

    Clone the Repository:

    bash

git clone 
            
            git@github.com:KabiruH/Simple-ERP.git

### Install Dependencies:

Navigate to the project directory and install the necessary dependencies using npm:

bash

        cd Simple-ERP/Backend
        npm install


bash
Client
        cd Simple-ERP
        npm install

### Set Up Environment Variables:

Create a .env file in the root directory of the project and provide the necessary environment variables:

        plaintext

        PORT=5000
        MONGO_URI=<your-mongodb-uri>
        JWT_SECRET=<your-jwt-secret>

### Start the Server:

Once dependencies are installed and environment variables are set, you can start the server:

    bash

        npm start

Next, you can start the frontend:

    bash

        npm start

The server will start running on the specified port (default: 5000).

### Seed Sample Data (Optional):

If you want to seed the database with sample transaction data, you can run the provided seeding script:

bash

        node seed-data.js

    Make sure to replace <your-mongodb-uri> with the actual URI of your MongoDB database.

## API Endpoints

        GET /transaction: Fetch all transactions
        POST /transaction: Create a new transaction
        GET /transaction/:id: Fetch details of a specific transaction
        PUT /transaction/:id: Update an existing transaction
        DELETE /transaction/:id: Delete a transaction

For detailed information on each endpoint, refer to the API documentation or the codebase.
Technologies Used

        Node.js
        Express.js
        MongoDB
        Mongoose
        JSON Web Tokens (JWT) for authentication
        bcrypt for password hashing

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.