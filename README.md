# Dish Dazzle

Welcome to our Dish Dazzle food app project! This application utilizes the Swiggy API to provide users with a seamless food ordering experience.

## Features

- Browse a variety of restaurants and cuisines
- View restaurant details, menus, and prices
- Place and track food orders
- Simple User Login Page
- Simple Contact and About Us Page

## Technologies Used

- React
- React Router for navigation
- Redux for state management
- Tailwind CSS - Styling Component
- Formik - handling form data
- Yup - adding from form validation
- EmailJS - Sending Email from user form to linked email
- react-hot-toast - showing notification on APP
- remix icon package
- Using Swiggy API from these [repo](https://github.com/n4ryn/food-wagon-backend) which help in bypass cors
## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/gagandeepsingh101/dish-dazzle-food-app.git
   ```
   
2. Navigate to the project directory
   
    ```bash
     cd dish-dazzle-food-app
    ```

3. Install dependencies
    ```bash
      npm install
    ```

4. Start the development server
    ```bash
      npm start
    ```
Open your browser and visit http://localhost:124

### Deployment
 For Live Demo click [here](https://food-ordering-app-git-main-gagandeepsingh101.vercel.app/) 


### Contributing
If you'd like to contribute to the project, please follow these steps:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

#### Project Structure
- /public: Contains static assets and the main HTML file.
- /src: Contains the React application source code.
  - /components: Reusable React components.
  - /page : Contain different React App Navigation Page
  - /utils : contain reusable code
      - /store : contain redux store which contain cart functionality
