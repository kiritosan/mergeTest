import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording..await page.goto('http://localhost:9000/');
  await page.goto('http://localhost:9000/');wait page.locator('html').click();
});