// testing all the navigation links on the uf ece website

import {test, expect} from '@playwright/test';

// before each test go to this website as starting point
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ece.ufl.edu/');
    await expect(page).toHaveTitle('Department of Electrical & Computer Engineering');

});


// testing the about links on the uf ece website
test('About links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'About', exact: true }).click();
  await expect(page.locator('h1')).toContainText('About');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.locator('#menu-item-32319').getByRole('link', { name: 'Department Leadership' }).click();
  await expect(page.locator('#main')).toContainText('Department Leadership');
  
  const links = [
    "Why ECE @ UF?",
    "Accreditation",
    "Department History",
    "Support ECE"
  ]

  for (let i = 0; i < links.length; i++) {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32287 > span').click();
  await page.getByRole('link', { name: links[i] }).click();
  await expect(page.locator('h1')).toContainText(links[i]);
  }
});

//testing the people links on the uf ece website
test('People links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'People' }).click();
  await expect(page.locator('h1')).toContainText('People');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32289 > span').click();
  await page.locator('#menu-item-32351').getByRole('link', { name: 'Faculty' }).click();
  await expect(page.locator('h1')).toContainText('Faculty');

  const links = [
    "Staff",
    "External Advisory Board",
    "ECE Ambassadors",
    "Student Groups"
  ]

  for (let i = 0; i < links.length; i++) {
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    await page.locator('#menu-item-32289 > span').click();
    await page.getByRole('link', { name: links[i] }).click();
    await expect(page.locator('h1')).toContainText(links[i]);
  }
});

//testing the admissions links on the uf ece website
test('Admissions links', async ({ page }) => {

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Admissions', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Admissions');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32291 > span').click();
  await page.getByRole('link', { name: 'Undergraduate Admissions', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Undergraduate Admissions');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32291 > span').click();
  await page.getByRole('link', { name: 'Graduate Admissions & Academics' }).click();
  await expect(page.locator('h1')).toContainText('Graduate Admissions & Academics');

});

// //testing the academics links on the uf ece website
test('Academics links', async ({ page }) => {

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Academics', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Academics');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Undergraduate Academics' }).click();
  await expect(page.locator('h1')).toContainText('Undergraduate Academics');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Graduate Academics', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Graduate Academics');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Online Courses' }).click();
  await expect(page.locator('h1')).toContainText('Online Courses');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Certificates' }).click();
  await expect(page.locator('h1')).toContainText('Certificates');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await expect(page.locator('h1')).toContainText('Forms');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32293 > span').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Course Syllabi' }).click();
  const page1 = await page1Promise;
  page1.close();
});

test('Research links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Research' }).click();
  await expect(page.locator('h1')).toContainText('Research');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-32295 > span').click();
  await page.getByRole('link', { name: "Computer Engineering", exact: true }).click();
  await expect(page.locator('h1')).toContainText("Computer Engineering");

  const links = [
    "Electronics",
    "Electrophysics",
    "Signals & Systems",
    "Labs, Centers & Institutes"]

  for (let i = 0; i < links.length; i++) {
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    await page.locator('#menu-item-32295 > span').click();
    await page.getByRole('link', { name: links[i] }).click();
    await expect(page.locator('h1')).toContainText(links[i]);
  }
});

test ('Resources links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'Resources', exact: true }).click();
  await page.getByRole('link', { name: 'For Alumni' }).click();
  await expect(page.locator('ol')).toContainText('Alumni Resources');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33243 > span').click();
  await page.getByRole('link', { name: 'For Faculty & Staff' }).click();
  await expect(page.locator('h1')).toContainText('Faculty & Staff Resources');
});

test('News and awards links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'News, Honors & Awards' }).click();
  await page.getByRole('link', { name: 'Department News' }).click();
  await expect(page.locator('h1')).toContainText('Department News');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('link', { name: 'News, Honors & Awards' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Upcoming Events' }).click();
  const page1 = await page1Promise;
  page1.close();

  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'Faculty Honors & Awards' }).click();
  await expect(page.locator('h1')).toContainText('Faculty Honors & Awards');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'ECE Hall of Fame' }).click();
  await expect(page.locator('h1')).toContainText('ECE Hall of Fame');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'ECE Excellence Awards' }).click()
  await expect(page.locator('h1')).toContainText('ECE Excellence Awards');


  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277 > span').click();
  await page.getByRole('link', { name: 'Distinguished Alumni Awards' }).click();
  await expect(page.locator('h1')).toContainText('Distinguished Alumni Awards');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.locator('#menu-item-33277').getByRole('link', { name: 'News, Honors & Awards' }).click();
  await page.getByRole('link', { name: 'Student Awards' }).click();
  await expect(page.locator('h1')).toContainText('Student Awards');
});

test('Other links', async ({ page }) => {
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'AI Assistants' }).click();
  await page.getByRole('link', { name: 'MS Coursework Planner' }).click();
  await expect(page.locator('h1')).toContainText('MS Coursework Planner');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'AI Assistants' }).click();
  await page.getByRole('link', { name: 'Faculty Research Yellow Pages' }).click();
  await expect(page.locator('h1')).toContainText('Faculty Research Yellow Pages');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'Key Links' }).click();
  await page.getByRole('link', { name: 'Forms' }).click();
  await expect(page.locator('h1')).toContainText('Forms');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'Key Links' }).click();
  await page.getByRole('link', { name: 'Department Directory' }).click();
  await expect(page.locator('h1')).toContainText('Department Directory');

  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await page.getByRole('button', { name: 'Key Links' }).click();
  await page.getByRole('link', { name: 'Contact ECE Florida' }).click();
  await expect(page.locator('h1')).toContainText('Contact ECE Florida');
});