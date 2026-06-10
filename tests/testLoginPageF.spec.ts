import { test, expect } from '../fixtures/pages.fixture';
import { validUser, inValidUser } from '../test-data/account';

test('should login successfully with valid credentials', async ( { loginPage, page } ) => {
        await loginPage.go();
        await loginPage.login(validUser.email, validUser.password);
        // Add assertions to verify successful login, e.g., check for a specific element on the dashboard
        await expect(page.locator(`//div[@data-cin-id='Header-header-DesktopHeader-root']`)).toBeVisible();
    });

test('should show error message with invalid credentials', async ( { loginPage, page } ) => {
        await loginPage.go();
        await loginPage.login(inValidUser.email, inValidUser.password);
        // Add assertions to verify error message is displayed
        await expect(page.locator(`//div[@data-cin-id='CinInformationMessage-wrapper']`)).toBeVisible();
    });