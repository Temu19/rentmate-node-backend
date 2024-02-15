# RentMate: Backend

## Nodejs + express

This is the Backend repository for RentMate,

## Getting Started

To get started with the RentMate frontend project, follow these steps:

1. Folk the repository:
2. Clone the repository to your local machine:

```
git clone https://github.com/bealugirma23/rentmate-node-backend.git
```

3. Navigate to the project directory:

```
cd RentMate-frontend
```

4. Install the dependencies:

```
npm install
```
5. Create a .env file in the root directory of the project with the following content:
   
  ```
PORT=5000
MONGODB_PORT=<your MongoDB connection URL>
JWT_SECRET=abcdefg
NODE_ENV=development
```
6. Start the development server:

```
npm run dev
```

## dependencies
- nodemon
- dotenv
- express
- mongoose
- mongodb
- joi : for validation
- jsonwebtoken(jwt) : for storing cookies
- bcryptjs : for encryption

## Contributing

Contributions to the RentMate frontend project are welcome! If you find any issues or have suggestions for improvements, please open an issue on the GitHub repository. If you would like to contribute code, feel free to open a pull request.
