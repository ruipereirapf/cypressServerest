# Cypress Test Automation Project for Serverest

![Cypress](https://img.shields.io/badge/Cypress-13.12.0-brightgreen)
![Serverest](https://img.shields.io/badge/Serverest-v1.0-blue)

## Index

1. [Project Description](#-project-description)
2. [Repository Contents](#-repository-contents)
3. [Project Links](#-project-links)
4. [About the Project](#-about-the-project)
   - [Frontend E2E Testing](#-frontend-e2e-testing)
   - [API Requests Testing](#-api-requests-testing)
5. [Repository Purpose](#-repository-purpose)
6. [Getting Started](#-getting-started)
   - [Additional Scripts](#additional-scripts)
   - [Project Structure](#-project-structure)
7. [Dependencies](#-dependencies)
8. [DevDependencies](#-devdependencies)
9. [Contact Information](#-contact-information)

## 📄 Project Description

This repository contains test automation scripts developed using Cypress for the [Serverest](https://front.serverest.dev/login) webpage. The project focuses on both front-end end-to-end (E2E) testing and API requests testing, ensuring the functionality and reliability of the Serverest platform.

## 📂 Repository Contents

- **Cypress Configuration Files**
- **E2E Test Scripts**: For the Serverest frontend
- **API Test Scripts**: For the Serverest backend
- **Custom Commands and Utilities**
- **Additional Resources and Documentation**

## 🌐 Project Links

- [Serverest API Documentation](https://serverest.dev/)
- [Serverest Frontend](https://front.serverest.dev/login)

## 📖 About the Project

The Cypress Test Automation Project for Serverest aims to provide comprehensive test coverage for both the frontend and backend of the Serverest platform. It leverages Cypress's powerful testing capabilities to perform robust end-to-end tests and API requests tests, ensuring the platform's overall quality and performance.

### 🔍 Frontend E2E Testing

The front-end end-to-end tests focus on simulating user interactions and validating the behavior of the Serverest web application. These tests cover various scenarios, including:

- User Authentication
- Navigation
- CRUD Operations

### 🔍 API Requests Testing

The API tests focus on validating the functionality of the Serverest backend. These tests ensure that the API endpoints respond correctly to different requests, covering scenarios such as:

- Data Retrieval
- Data Creation
- Data Updating
- Data Deletion

## 🎯 Repository Purpose

This repository serves as a demonstration of my skills in test automation using Cypress. It includes a comprehensive set of test scripts for both frontend and API testing, showcasing my ability to create robust and maintainable test suites. This project is intended for learning purposes and to demonstrate my proficiency in using Cypress for end-to-end and API testing.

## 🚀 Getting Started

To get started with this project, follow these steps:

1. **Clone this repository**:
    ```sh
    git clone https://github.com/ruipereirapf/cypressServerest.git
    cd cypressServerest
    ```
2. **Install the dependencies**:
    ```sh
    npm install
    ```
3. **Open Cypress Test Runner**:
    ```sh
    npx cypress open
    ```
4. **Run Tests in Headless Mode**:
    ```sh
    npx cypress run
    ```

### Additional Scripts

- **Run specific test suite**:
    ```sh
    npx cypress run --spec "cypress/integration/tests/your_test_file.js"
    ```

### Project Structure

The project structure will be added in the future as the project evolves.

## 📦 Dependencies

- `@badeball/cypress-cucumber-preprocessor`: ^20.1.0

## 🛠️ DevDependencies

- `@bahmutov/cypress-esbuild-preprocessor`: ^2.2.1
- `@faker-js/faker`: ^8.4.1
- `cypress`: ^13.12.0
- `cypress-xpath`: ^2.0.1
- `ts-loader`: ^9.5.1

## 📞 Contact Information

For any questions or collaborations, feel free to contact me on [LinkedIn](https://www.linkedin.com/in/yourusername/).

---

![GitHub](https://img.shields.io/github/stars/ruipereirapf/cypressServerest?style=social)
![GitHub](https://img.shields.io/github/forks/ruipereirapf/cypressServerest?style=social)
