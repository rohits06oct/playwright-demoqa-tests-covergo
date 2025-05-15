const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData');

test.describe('Practice Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  test('Submit filled form', async ({ page }) => {
    await page.fill('#firstName', testData.userData.firstName);
    await page.fill('#lastName', testData.userData.lastName);
    await page.fill('#userEmail', testData.userData.email);
    await page.click('label[for="gender-radio-1"]');
    await page.fill('#userNumber', testData.userData.phone);
    await page.click('#dateOfBirthInput');
    await page.fill('#dateOfBirthInput', '19 May 1997');
    await page.click('div[aria-label="Choose Monday, May 19th, 1997"]');
    // debugger;
    await page.click('#subjectsInput');
    await page.type('#subjectsInput', 'Hindi');
    await page.click('#react-select-2-option-0');
    await page.fill('#currentAddress', 'Nainagarh road');
    await page.click('label[for="hobbies-checkbox-1"]');
    await page.locator('#react-select-3-input').fill('NCR');
    await page.click('#react-select-3-option-0');
    await page.locator('#react-select-4-input').fill('Delhi');
    await page.click('#react-select-4-option-0');
    await page.click('#submit');
    await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible();
    const actualText = await page.textContent('#example-modal-sizes-title-lg');
    await expect(actualText).toBe('Thanks for submitting the form');
    const StudentName = await page.textContent('//table[contains(@class,"table table-dark")]//td[text()="Student Name"]/parent::tr//td[2]');
    await expect(StudentName).toBe(testData.userData.firstName+" "+testData.userData.lastName);
    const StudentEmail = await page.textContent('//table[contains(@class,"table table-dark")]//td[text()="Student Email"]/parent::tr//td[2]');
    await expect(StudentEmail).toBe(testData.userData.email);
  });
});
