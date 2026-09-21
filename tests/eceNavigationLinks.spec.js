// testing all the navigation links on the uf ece website

import {test, expect} from '@playwright/test';

// before each test go to this website as starting point
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ece.ufl.edu/');
});

// close the page after each test is done
test.afterEach(async ({ page }) => {
    await page.close();
});

// testing the about links on the uf ece website
test('About links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'About', exact: true }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.locator('#menu-item-32319').getByRole('link', { name: 'Department Leadership' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.getByRole('link', { name: 'Why ECE @ UF?' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.getByRole('link', { name: 'Accreditation' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.getByRole('link', { name: 'Department History' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.getByRole('link', { name: 'Support ECE' }).click();
});

//testing the people links on the uf ece website
test('People links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'People' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32289 > span').click();
  await page.locator('#menu-item-32351').getByRole('link', { name: 'Faculty' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32289 > span').click();
  await page.getByRole('link', { name: 'Staff' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32289 > span').click();
  await page.getByRole('link', { name: 'External Advisory Board' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32289 > span').click();
  await page.getByRole('link', { name: 'ECE Ambassadors' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32289 > span').click();
  await page.getByRole('link', { name: 'Student Groups' }).click();

});

//testing the admissions links on the uf ece website
test('Admissions links', async ({ page }) => {

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Admissions', exact: true }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32291 > span').click();
  await page.getByRole('link', { name: 'Undergraduate Admissions', exact: true }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32291 > span').click();
  await page.getByRole('link', { name: 'Graduate Admissions &' }).click();

});

// //testing the academics links on the uf ece website
test('Academics links', async ({ page }) => {

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Academics', exact: true }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Undergraduate Academics' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Graduate Academics', exact: true }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Online Courses' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Certificates' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Course Syllabi' }).click();
  const page1 = await page1Promise;
});

test('Research links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Research' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32295 > span').click();
  await page.getByRole('link', { name: 'Computer Engineering', exact: true }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32295 > span').click();
  await page.getByRole('link', { name: 'Electronics' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32295 > span').click();
  await page.getByRole('link', { name: 'Electrophysics' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32295 > span').click();
  await page.getByRole('link', { name: 'Signals & Systems' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32295 > span').click();
  await page.getByRole('link', { name: 'Labs, Centers & Institutes' }).click();
});

test ('Resources links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Resources', exact: true }).click();
  await page.getByRole('link', { name: 'For Alumni' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33243 > span').click();
  await page.getByRole('link', { name: 'For Faculty & Staff' }).click();
});

test('News and awards links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'News, Honors & Awards' }).click();
  await page.getByRole('link', { name: 'Department News' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'News, Honors & Awards' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Upcoming Events' }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Faculty Honors & Awards' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.goto('https://www.ece.ufl.edu/');
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'ECE Hall of Fame' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'ECE Excellence Awards' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'Distinguished Alumni Awards' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277').getByRole('link', { name: 'News, Honors & Awards' }).click();
  await page.getByRole('link', { name: 'Student Awards' }).click();
});

test('Other links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'AI Assistants' }).click();
  await page.getByRole('link', { name: 'MS Coursework Planner' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'AI Assistants' }).click();
  await page.getByRole('link', { name: 'Faculty Research Yellow Pages' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'Key Links' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'Key Links' }).click();
  await page.getByRole('link', { name: 'Department Directory' }).click();
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'Key Links' }).click();
  await page.getByRole('link', { name: 'Contact ECE Florida' }).click();
});