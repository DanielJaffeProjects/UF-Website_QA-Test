# UF ECE Website – End-to-End QA Test Suite

An automated **End-to-End (E2E) testing suite** built with **Playwright and JavaScript** to validate navigation, user interactions, and key functionality across the University of Florida Department of Electrical & Computer Engineering website.

This project combines **automated testing with manual QA and defect reporting** to evaluate the website from a user's perspective.

**Website Tested:** https://ece.ufl.edu/

---

## 🔍 What This Project Tests

The test suite validates major navigation areas, interactive elements, directory functionality, research-area navigation, and footer links.

### Navigation Testing

Automated tests cover the following major website sections:

* **About**

  * Department Leadership
  * Why ECE @ UF?
  * Accreditation
  * Department History
  * Support ECE

* **People**

  * Faculty
  * Staff
  * External Advisory Board
  * ECE Ambassadors
  * Student Groups

* **Admissions**

  * Undergraduate Admissions
  * Graduate Admissions & Academics

* **Academics**

  * Undergraduate Academics
  * Graduate Academics
  * Online Courses
  * Certificates
  * Forms
  * Course Syllabi popup

* **Research**

  * Computer Engineering
  * Electronics
  * Electrophysics
  * Signals & Systems
  * Labs, Centers & Institutes

* **Resources**

  * For Alumni
  * For Faculty & Staff

* **News, Honors & Awards**

  * Department News
  * Upcoming Events popup
  * Faculty Honors & Awards
  * ECE Hall of Fame
  * ECE Excellence Awards
  * Distinguished Alumni Awards
  * Student Awards

* **Other / Utility Links**

  * AI Assistants
  * Key Links
  * MS Coursework Planner
  * Faculty Research Yellow Pages
  * Department Directory
  * Contact ECE

The navigation tests verify that links lead to the expected pages and that the resulting page contains the expected heading or content.

---

## 👥 People & Directory Testing

Additional tests cover functionality within the ECE People section, including:

* Faculty navigation
* Affiliate Faculty
* Emeritus Faculty
* Research Faculty
* Staff
* Department Directory
* Directory search
* Student Groups
* Academic Advising

## The directory tests also exercise search functionality and extract information displayed on the page, such as student-group names and academic-advisor contact information.

## 🧪 Research Area Testing

The research-area tests interact with the website's research tabs and verify that the corresponding **Learn More** links navigate to the expected research pages.

Tested areas include:

* Computer Engineering
* Electronics
* Electrophysics
* Signals & Systems
* Research Labs, Centers & Institutes

---

## 🔗 Footer Testing

The footer test suite validates multiple categories of links:

### Staff Resources

* Directory
* IT Resources
* Travel Policies
* Travel Request Form
* Fiscal Policies
* Facilities
* Purchasing Policies
* Bylaws
* Conference Room Reservation
* HR/Payroll

### UF & Website Resources

* UF Website Listing
* Accessibility
* Text-Only Version
* Privacy Policy
* Regulations
* Campus Map
* UF Calendar
* myUFL
* One.UF
* UF Directory

### Social Media

* Facebook
* X
* YouTube
* LinkedIn
* Instagram

---

## 🐞 Manual QA & Defect Reporting

In addition to automated testing, I manually tested the website and documented defects using structured QA bug reports.

Examples of issues identified include:

### Navbar Search Overlap

The navbar does not hide cleanly when scrolling, causing page text to overlap the search button and prevent the search control from being clicked.

### Navbar Dropdown Text Visibility

After navigating through certain dropdown menus, previously selected menu text becomes white against a white background, making the selection difficult to see.

### Resources & News Navigation

The Resources and News, Honors & Awards navigation links were observed not to navigate to another page.

### Travel Policies Link Error

The TripSource website link under Travel Policies produced an error stating that no URL was found for the tracker ID.

### News Feed Menu

The News Feed page's Menu button did not display the available navigation links.

Each defect was documented with:

* Environment information
* Steps to reproduce
* Expected result
* Actual result
* Severity / priority fields
* Screenshots or screen recordings

---

## 🛠️ Technologies & Tools

* **Playwright**
* **JavaScript**
* **Node.js**
* **Chromium**
* **VS Code**
* **Git / GitHub**
* **Manual QA testing**
* **Bug reporting**

---

## ⚙️ Playwright Configuration

The test suite uses:

* Chromium / Desktop Chrome
* Parallel test execution
* HTML test reporting
* Trace collection on test failure
* Configurable test and assertion timeouts

The current configuration uses Playwright's HTML reporter and retains traces when tests fail.

---

## ▶️ How to Run

### 1. Install dependencies

```bash
npm install
npx playwright install
```

### 2. Run the test suite

```bash
npx playwright test
```

### 3. View the HTML test report

```bash
npx playwright show-report
```

### Run a specific test file

```bash
npx playwright test tests/eceNavigationLinks.spec.js
```

### Run tests with the browser visible

```bash
npx playwright test --headed
```

---

## 🎯 Project Goals

This project was created to gain practical experience with:

* End-to-End test automation
* Browser automation with Playwright
* Locators and accessibility-based selectors
* Navigation and UI interaction testing
* Popup/window handling
* Functional testing
* Exploratory testing
* Defect identification
* Bug documentation
* Regression testing concepts
* Automated test reporting

The goal is to demonstrate practical **Software QA / Test Automation** skills through testing a real-world website rather than a tutorial application.
