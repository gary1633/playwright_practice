import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUser, inValidUser } from '../test-data/account';

test('should login successfully with valid credentials', async ( { page } ) => {
        const loginPage = new LoginPage(page);
        await loginPage.go();
        await loginPage.login(validUser.email, validUser.password);
        // Add assertions to verify successful login, e.g., check for a specific element on the dashboard
        await expect(page.locator(`//div[@data-cin-id='Header-header-DesktopHeader-root']`)).toBeVisible();
    });

test('should show error message with invalid credentials', async ( { page } ) => {
        const loginPage = new LoginPage(page);
        await loginPage.go();
        await loginPage.login(inValidUser.email, inValidUser.password);
        // Add assertions to verify error message is displayed
        await expect(page.locator(`//div[@data-cin-id='CinInformationMessage-wrapper']`)).toBeVisible();
    });