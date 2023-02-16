# Retailer rewards statement project
This is retailer offer rewards point application for customer transactions. It displays a data table which shows the reward points earned for each customer per month and the total during three-month period.

CREDITS: This project built by leveraging the standard create-react-app set-up

### `Live Demo`
Code Setup and Test Cases execution:
![alt text](./demo/Code-Setup-with-test-cases.png?raw=true)

Welcome Page: When application will load then able to see page as similar below.
![alt text](./demo/Home.png?raw=true)

OnClick on any customer row, it will list out total earned points based on transaction for a customer.
![alt text](./demo/ViewByCustomerId.png?raw=true)

When click on `View All Transaction` then able to see all customer transactions as per below.
![alt text](./demo/AllTransactions.png?raw=true)

## The project solves the below problem/assignment asked by the client
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.\
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).\
Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

Use React JS (do not use TypeScript)\
Simulate an asynchronous API call to fetch data\
Make up a data set to best demonstrate your solution\
Check solution into GitHub

## Architecture / Design
This application uses client side rendering leveraging the below technologies

`CLIENT` : ReactJS (Javascript), React Hooks, Tailwind CSS, Jest\
`SERVER` : Mock Server (For retrieving the mock data)\
`DATABASE` : Mock customer.json snd transaction.json

# Implementation notes

- Testing
    - the file `api/server.js` is mocked in all controller test files. In the real world, `axios` or similar libraries would be mocked instead.
- Styling: [tailwindCss](https://tailwindcss.com/) is used for styling. [TailwindCss](https://tailwindcss.com/) is a highly customizable css library packed with classes like `flex` and `text-center` that can be composed to build any design, directly in the markup.
- Code formatting: eslint and prettier were used to make the code consistent and readable.
- Data
    - There are json files under the `api` folder that contains a list transactions and customers.
    - There are a couple of ways to interpret `a three-month period`. For this implementation `a three-month period` is assumed to mean `90 days`.
    - The fake api is configured to return transactions that are 90 days or less from today's date.
    - The fake api also sorts the transactions by date.


## Instructions to set up and run this project

### `git clone https://github.com/tplay234/assignment.git`

Clone the repo on your local machine using git clone command

In the project directory, you can run:

### `npm install`
Installs all the packages and dependencies needed for this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


