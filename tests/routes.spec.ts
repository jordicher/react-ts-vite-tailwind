import { expect, test } from '@playwright/test';

test.describe('basic test routes', () => {
  test('home', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const title = page.locator('.text-2xl');

    await expect(title).toHaveText('Home');
  });

  test('login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    const title = page.locator('.text-2xl');

    await expect(title).toHaveText('Login');
  });
});
