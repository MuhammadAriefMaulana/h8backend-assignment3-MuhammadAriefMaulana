# Preparation
1. npm i
2. npx sequelize db:create
3. npx sequelize db:create --env test
4. npx sequelize db:migrate
5. npx sequelize db:migrate --env test

# Additional Note
Using argon2 for hashing


# Authentication test
- Should be able to register
- Should be able to login
- Should not be able to login when email is invalid
- Should not be able to login when password is invalid

# Todos Test
- Should not be able to get all todos when token is not provided
- Should be able to get all todos
- Should be able to get single todo

# Result
```
PS C:\Users\muhammadmal\Hacktiv8\node\assignment3> npm test

> assignment3@1.0.0 test
> jest

 PASS  __test__/todos.test.js
 PASS  __test__/auth.test.js (5.314 s)

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        6.123 s
Ran all test suites.
```