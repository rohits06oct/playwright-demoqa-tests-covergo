# Playwright DemoQA Tests

This project contains UI and API test cases written in Playwright using JavaScript.

## Tested Sections
- Form: https://demoqa.com/automation-practice-form
- Table (CRUD): https://demoqa.com/webtables
- Books API: https://demoqa.com/swagger/

## Prerequisites
- Node.js >= 16
- npm

## Installation
```bash
git clone https://github.com/your-username/playwright-demoqa-tests.git
cd playwright-demoqa-tests
fnm env --use-on-cd | Out-String | Invoke-Expression
npm install
npx playwright install
npm install --save-dev cross-env
```

## Running Tests
### UI Tests
```bash
npx playwright test
```

### Run Specific File
```bash
npx playwright test tests/form.spec.js
```

### Debug Specific File
```bash
Add `// debugger;` line in the test file
Then Run below command
npm run debug -- tests/form.spec.js
```

### API Tests Only
```bash
npx playwright test tests/api.spec.js
```

## Generate Report
```bash
npx playwright show-report
```
