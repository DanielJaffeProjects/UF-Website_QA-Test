import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ece.ufl.edu/');
});


//testing all the footer links on the uf ece website
test('Footer Links', async ({ page }) => {

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

   
    