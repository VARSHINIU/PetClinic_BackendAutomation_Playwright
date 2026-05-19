# 🐾 PetClinic Backend Automation – Playwright

Backend API Automation Framework built using Playwright with JavaScript for validating REST APIs, response assertions and  schema validations

---

# 🚀 Project Overview

This framework automates backend API testing for the PetClinic application using Playwright API testing capabilities.

The project covers:

- API Request Validation
- Response Assertion Testing
- CRUD Operations Testing
- Status Code Verification
- JSON Response Validation
- Environment Configuration
- Reporting 

---

# 🛠️ Tech Stack

- Playwright
- JavaScript (Node.js)
- REST API Testing
- Dotenv
- JSON Assertions

---

# 📂 Project Structure

```plaintext
PetClinic_BackendAutomation_Playwright
│
├── API/  ==> Maintains all API
|
├── DATA/  ==> Contains request and response details for each API
|
├── tests/  ==> Contains Test Files
│
├── utils/    ==> helper functions for response bodyy and schema validation
│   ├── ResponseCheck.js
│   
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/VARSHINIU/PetClinic_BackendAutomation_Playwright.git
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

OR

```bash
npm ci
```

---

## 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```


---

# ▶️ Run Tests

## Run all tests

```bash
npx playwright test
```

---

## Run specific test

```bash
npx playwright test tests/testfilename.spec.js
```


---

# 📊 Reporting

Open Playwright HTML report:

```bash
npx playwright show-report
```

---

# 🧠 Key Learning Highlights

- Backend API Automation using Playwright
- Async/Await handling in JavaScript
- API Assertions & Validations
- Environment-based execution
- Reusable utility methods

---

# 👩‍💻 Author

## Varshini

GitHub:
https://github.com/VARSHINIU
