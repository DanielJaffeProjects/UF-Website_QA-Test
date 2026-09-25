import { test, expect } from '@playwright/test';

test('Research Areas', async ({ page }) => {
  await page.goto('https://ece.ufl.edu/');
  await page.getByRole('link', { name: 'Learn More' }).click();
  await expect(page.getByRole('heading', { name: 'Computer Engineering' })).toBeVisible();
  
  await page.goto('https://ece.ufl.edu/');
  await page.getByRole('tab', { name: 'Electrophysics' }).click();
  await page.getByLabel('Electrophysics').getByRole('link', { name: 'Learn More' })
  await expect(page.getByRole('heading', { name: 'Electrophysics' })).toBeVisible();

  await page.goto('https://ece.ufl.edu/');
  await page.getByRole('tab', { name: 'Electronics' }).click();
  await page.getByLabel('Electronics').getByRole('link', { name: 'Learn More' }).click();
  await expect(page.getByRole('heading', { name: 'Electronics' })).toBeVisible();
  
  await page.goto('https://ece.ufl.edu/');
  await page.getByRole('tab', { name: 'Signals & Systems' }).click();
  await page.getByLabel('Signals & Systems').getByRole('link', { name: 'Learn More' }).click();
  await expect(page.getByRole('heading', { name: 'Signals & Systems' })).toBeVisible();

  await page.goto('https://ece.ufl.edu/');
  await page.getByRole('tab', { name: 'Institutes/Centers/Labs' }).click();
  await page.getByLabel('Institutes/Centers/Labs').getByRole('link', { name: 'Learn More' }).click();
  await expect(page.getByRole('heading', { name: 'Research Labs, Centers & Institutes' })).toBeVisible();
});