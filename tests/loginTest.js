import { baseUrl } from "../constants.js";
import { expect, browser, $ } from "@wdio/globals";
import commonPageElements from "../pageElements/commonPageElements.json" assert { type: "json" };
import { login, logout, switchToNewTab } from "../helpers/navHelpers.js";

describe("Authentication and Navigation Flows Test Suite", () => {
  context("Successful login and logout flow verification", async () => {
    beforeEach("Login with valid credentials", async () => {
      await login();
    });

    it("Successful login with valid credentials", async () => {
      await expect($(commonPageElements.flashMessage)).toBeExisting();
      await expect($(commonPageElements.flashMessage)).toHaveText(
        expect.stringContaining("You logged into a secure area!")
      );
      await expect($(commonPageElements.logoutButton)).toBeExisting();
      await expect($(commonPageElements.logoutButton)).toHaveText(
        expect.stringContaining("Logout")
      );
    });

    it("Successful logout", async () => {
      await logout();
      await expect($(commonPageElements.flashMessage)).toBeExisting();
      await expect($(commonPageElements.flashMessage)).toHaveText(
        expect.stringContaining("You logged out of the secure area!")
      );
      await expect(browser).toHaveUrl(`${baseUrl}/login`);
    });
  });

  context("Unsuccesful login with incorrect credentials", async () => {
    /**
     * Note:
     * Returning specific errors like "Your username is invalid!" or "Your password is invalid!"
     * is a security risk because it reveals which part of the credentials is incorrect.
     * This lets attackers confirm if a username exists, making brute force attacks easier.
     * It’s better to use a generic message like "Invalid username or password" to avoid leaking information.
     */
    it("Login failure with invalid username", async () => {
      await login({ username: "" });
      await expect($(commonPageElements.flashMessage)).toHaveText(
        expect.stringContaining("Your username is invalid!")
      );
    });
    it("Login failure with invalid password", async () => {
      await login({ password: "" });
      await expect($(commonPageElements.flashMessage)).toHaveText(
        expect.stringContaining("Your password is invalid!")
      );
    });
  });

  context("Redirection from footer link", async () => {
    it("Click link in the footer and verify redirection", async () => {
      await browser.url("/");

      await expect($(commonPageElements.poweredByLink)).toBeExisting();
      await $(commonPageElements.poweredByLink).click();
      const newTabTitle = "Home | Elemental Selenium";
      await switchToNewTab(newTabTitle);
      await expect(browser).toHaveUrl("https://elementalselenium.com/");
      await expect(browser).toHaveTitle(newTabTitle);
    });
  });
});
