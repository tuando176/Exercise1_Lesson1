import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.guru99.com/xpath-selenium.html');
  // await page.waitForTimeout(10000);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/XPath in Selenium/);
});
//test started link
test('get started link', async ({ page }) => {
  await page.goto('https://www.guru99.com/');

  // Click the get started link.
  await page.getByRole('link', { name: '➤ Selenium' }).click();
  // await page.getByRole('link', { name: 'Selenium' }).first().click();
  
  // Expects page to have a heading with the name of Selenium Tutorial Syllabus.
  await expect(page.getByRole('heading', { name: 'Selenium Tutorial Syllabus' })).toBeVisible();
});
