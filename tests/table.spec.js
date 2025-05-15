const { test, expect } = require('@playwright/test');
const testData = require('../utils/testData');

test.describe('Web Tables CRUD', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/webtables');
  });

  test('Add new user', async ({ page }) => {
    await page.click('#addNewRecordButton');
    await page.fill('#firstName', testData.userData.firstName);
    await page.fill('#lastName', testData.userData.lastName);
    await page.fill('#userEmail', testData.userData.email);
    await page.fill('#age', testData.userData.age);
    await page.fill('#salary', testData.userData.salary);
    await page.fill('#department', testData.userData.department);
    await page.click('#submit');
    await expect(page.locator('.rt-tr-group').filter({ hasText: testData.userData.firstName })).toHaveCount(1);
  });

  test('View a user', async ({ page }) => {
    await expect(page.locator('.rt-tr-group').filter({ hasText: 'Cierra' })).toHaveCount(1);
    await expect(page.locator('.rt-tr-group').filter({ hasText: 'Vega' })).toHaveCount(1);
    await expect(page.locator('.rt-tr-group').filter({ hasText: '39' })).toHaveCount(1);
    await expect(page.locator('.rt-tr-group').filter({ hasText: '10000' })).toHaveCount(1);
  });

  test('Edit a user', async ({ page }) => {
    await page.click('#edit-record-1');
    await page.fill('#department', 'Automation');
    await page.click('#submit');
    await expect(page.locator('.rt-tr-group').filter({ hasText: 'Automation' })).toHaveCount(1);
  });

  test('Delete a user', async ({ page }) => {
    await page.click('#delete-record-1');
    const rows = page.locator('.rt-tr-group');
    const count = await rows.count();
    for (let i = 0; i < count; i++) {
    await expect(rows.nth(i)).not.toContainText('Cierra');
    }
  });

});
