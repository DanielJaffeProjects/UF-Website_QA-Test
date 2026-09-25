import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ece.ufl.edu/');
    await expect(page).toHaveTitle('Department of Electrical & Computer Engineering');
});


//testing the footer staff resources links on the uf ece website
test('Footer staff resources Links', async ({ page }) => {

    const links = [
    "Directory",
    "IT resources",
    "Travel policies",
    "Travel request form",
    "Fiscal policies",
    "Facilities",
    "Purchasing policies",
    "Bylaws",
    "Conference room reservation",
    "HR/payroll",
    ];
    
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        await page.getByRole('link', { name: link , exact: true }).click();    }
});

//testing the footer website and uf resources links on the uf ece website
test('Footer Website and Uf resources Links', async ({ page }) => {

    const links = [
    "UF Website Listing",
    "Accessibility",
    "Text-Only Version",
    "Privacy Policy",
    "Regulations",
    "About This Site",
    "Campus Map",
    "UF Calendar",
    "myUFL",
    "One.UF",
    "UF Directory"
    ];
    
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        await page.getByRole('link', { name: link , exact: true }).click();    }
});

// checking the social media footer links on the uf ece website
test('Footer Social Media Links', async ({ page }) => {

    const socialLinks = [
    "Facebook",
    "X (formerly Twitter)",
    "YouTube",
    "LinkedIn",
    "Instagram"    ];
    
    for (let i = 0; i < socialLinks.length; i++) {
        await page.goto('https://www.ece.ufl.edu/');
        const link = socialLinks[i];
        await page.getByRole('link', { name: link , exact: true }).click(); 
        await expect(page.getByText(link, { exact: true })).toBeVisible();    
}
    await page.goto('https://www.ece.ufl.edu/');
    await page.getByRole('link', { name: 'News Feed' }).click();
});

   
    