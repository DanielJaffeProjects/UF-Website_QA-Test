# UF ECE Website – End-to-End Navigation Test Suite

An automated End-to-End (E2E) testing suite built with **Playwright** to validate navigation links, menu toggles, and dropdown interactions across the [University of Florida Department of Electrical & Computer Engineering](https://ece.ufl.edu/) website.

---

## What Was Tested (Test Scope)

This suite runs automated browser tests across all main navigation categories on the site. Each test opens the desktop menu toggle, clicks the target section links, and verifies that sub-links and popups operate correctly:

* **About Section:** Validates main landing page and sub-links (*Department Leadership, Why ECE @ UF?, Accreditation, Department History, Support ECE*).
* **People Section:** Tests primary tab navigation and member sub-pages (*Faculty, Staff, External Advisory Board, ECE Ambassadors, Student Groups*).
* **Admissions Section:** Verifies links for both *Undergraduate Admissions* and *Graduate Admissions*.
* **Academics Section:** Tests core academic links (*Undergraduate, Graduate, Online Courses, Certificates, Forms*) and handles external window popups for *Course Syllabi*.
* **Research Section:** Validates discipline-specific research areas (*Computer Engineering, Electronics, Electrophysics, Signals & Systems, Labs & Institutes*).
* **Resources Section:** Tests target links for *For Alumni* and *For Faculty & Staff*.
* **News, Honors & Awards Section:** Navigates through *Department News, Faculty Honors, Hall of Fame, Excellence Awards, Distinguished Alumni, Student Awards*, and external popup handling for *Upcoming Events*.
* **Other & Utility Links:** Tests header utility tools (*AI Assistants, Key Links, MS Coursework Planner, Faculty Research Yellow Pages, Department Directory, Contact ECE*).

---
## Technologies Used

- **Playwright**
- **JavaScript**
- **Node.js**
- **Chromium**


---

# How to Run the Tests

## 1. Install Dependencies
npm install
npx playwright install

## 2. Run Tests
npx playwright test

## 3. View the HTML Test Report
npx playwright show-report
