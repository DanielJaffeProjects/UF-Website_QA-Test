import { test, expect } from '@playwright/test';


// before each test go to this website as starting point
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ece.ufl.edu/');
    await expect(page).toHaveTitle('Department of Electrical & Computer Engineering');
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    await page.getByRole('link', { name: 'People' }).click();
    await expect(page.locator('h1')).toContainText('People');
});

// testing the search functionality on the people page of the uf ece website
async function search(page) {
  await page.getByRole('textbox', { name: 'Search Directory' }).click();
  await page.getByRole('textbox', { name: 'Search Directory' }).fill('Jacob');
  await page.getByRole('button', { name: 'Search Directory' }).click();
  await page.getByRole('link', { name: 'Clear Search' }).click();
}

// testing the faculty section on the people page of the uf ece website
test('Faculty', async ({ page }) => {
  await page.getByRole('link', { name: 'Faculty' }).click();
  await expect(page.locator('h1')).toContainText('Faculty');
  await page.getByRole('link', { name: 'Faculty', exact: true }).click();
  await page.getByRole('link', { name: 'Affiliate Faculty' }).click();
  await page.getByRole('link', { name: 'Emeritus Faculty' }).click();
  await page.getByRole('link', { name: 'Research Faculty' }).click();
  await search(page);
});

// testing the staff section on the people page of the uf ece website
test('Staff', async ({ page }) => {
  await page.getByRole('link', { name: 'Staff' }).click();
  await expect(page.locator('h1')).toContainText('Staff');
  await search(page);
});

test('Department Directory', async ({ page }) => {
  await page.getByRole('link', { name: 'Department Directory Contact' }).click();
  await expect(page.locator('h1')).toContainText('Department Directory');
  await page.getByRole('link', { name: 'J', exact: true }).click();
  await page.getByRole('link', { name: 'Clear Search' }).click();
});

let studentGroups = [];

test('student groups', async ({ page }) => {
  await page.getByRole('link', { name: 'Student Groups' }).click();
  await expect(page.locator('h1')).toContainText('Student Groups');
  // if getbyrole are links on the page print them here
  const links = await page.locator('main a').all();
  studentGroups.push('NAMES OF THE STUDENT GROUPS IN ECE:');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const linkText = await link.textContent();
    studentGroups.push(linkText);
  }
  console.log(studentGroups.join('\n'));
});

let academicAdvisors = [];
test('Academic Advisors', async ({ page }) => {
  await page.getByRole('link', { name: 'Academic Advising ECE Student' }).click();
  await expect(page.locator('h1')).toContainText('Academic Advising');
  const names = await page.locator('.entry-content h4.wp-block-heading').all();
  const email = await page.locator('.entry-content p.wp-block-paragraph a').filter({ hasText: '@' }).all();
  academicAdvisors.push('NAMES AND EMAILS OF ACADEMIC ADVISORS IN ECE:');
  for (let i = 0; i < names.length; i++) {

    const name = names[i];
    const nametext = await name.textContent();
    const emailText = email[i];
    const emailTextContent = await emailText.textContent();
    academicAdvisors.push(`Name: ${nametext}, Email: ${emailTextContent}`);
  }
  console.log(academicAdvisors.join('\n'));

 });

