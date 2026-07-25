## FakestoreAPI Playwright API Testing Project

## Overview

A Beginner-friendly Playwright JavaScript API testing framework using POM structure, test data separation, GitHub Actions, and Fake Store API.

## Skills Demonstrated

- JavaScript API automation testing
- Playwright API testing with `request` fixture
- Page Object Model style framework design
- REST API validation for `GET`, `POST`, `PUT`, and `DELETE` requests
- Test data management using separate data files
- HTTP status code and JSON response validation
- GitHub Actions CI workflow setup
- HTML test report generation

## Tech Stack

- JavaScript
- Playwright Test
- Node.js
- npm
- REST API
- GitHub Actions

## API Under Test
Base URL:

```text
https://fakestoreapi.com
```

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── api-tests.yml
├── api/
│   ├── authApi.js
│   ├── cartsApi.js
│   ├── productsApi.js
│   └── usersApi.js
├── testData/
│   ├── CartData.js
│   ├── Logindetails.js
│   ├── ProductData.js
│   └── UserData.js
├── tests/
│   ├── carts.spec.js
│   ├── products.spec.js
│   └── users.spec.js
```

## Folder Details

| Folder / File | Purpose |
| --- | --- |
| `api/` | Contains API object classes and reusable request methods |
| `testData/` | Contains request body and reusable test data |
| `tests/` | Contains Playwright test spec files |
| `playwright.config.js` | Contains Playwright configuration and base URL setup |
| `.github/workflows/api-tests.yml` | Runs tests automatically in GitHub Actions |
| `package.json` | Contains project scripts and dependencies |

## What POM Means in This API Project

POM usually means Page Object Model in UI automation. In this API project, the same idea is used for API endpoints.

Example:

- `ProductsApi` contains product request methods.
- `CartsApi` contains cart request methods.
- `UsersApi` contains user request methods.
- `AuthApi` contains login request methods.

This keeps test files easy to read because tests only call methods and verify results.

## Setup

Install dependencies:

```powershell
npm install
```

## Run Tests

Run all API tests:

```powershell
npm test
```

Open the HTML report after a test run:

```powershell
npm run test:report
```

## Change Base URL

The default base URL is configured in `playwright.config.js`:

```javascript
baseURL: process.env.BASE_URL || 'https://fakestoreapi.com'
```

To run tests with a different base URL in PowerShell:

```powershell
$env:BASE_URL = "https://fakestoreapi.com"
npm test```

## GitHub Actions

The workflow file `.github/workflows/api-tests.yml` runs API tests automatically on:

- Push to the `main` branch
- Pull request to the `main` branch
- Manual workflow run from GitHub Actions

## Useful npm Scripts

| Command | Description |
| --- | --- |
| `npm test` | Runs all Playwright tests |
| `npm run test:debug` | Runs tests in Playwright debug mode |
| `npm run test:report` | Opens the HTML report |



