import { expect, browser, $ } from "@wdio/globals";
import { login, logout, switchToNewTab } from "../helpers/navHelpers.js";
import commonElements from "../pageElements/commonPageElements.json";
import { baseUrl } from "../constants.js";

describe("Authentication and Navigation Flows Test Suite", () => {
  context("Successfull login and logout verifications", async () => {
    beforeEach("Login", async () => {
      await login();
    });

    it("Successfull login with valid credentials", async () => {
      await expect($(commonElements.flashMessage)).toBeExisting();
      await expect($(commonElements.flashMessage)).toHaveText(
        expect.stringContaining("You logged into a secure area!")
      );
      await expect($(commonElements.logoutButton)).toBeExisting();
      await expect($(commonElements.logoutButton)).toHaveText(
        expect.stringContaining("Logout")
      );
    });

    it("Should logout succesfully and redirect to login page", async () => {
      await logout();
      await expect($(commonElements.flashMessage)).toBeExisting();
      await expect($(commonElements.flashMessage)).toHaveText(
        expect.stringContaining("You logged out of the secure area!")
      );
      await expect(browser).toHaveUrl(`${baseUrl}/login`);
    });
  });

  context("Login with invalid credentials", async () => {
    it("Should failed login with invalid username", async () => {
      await login({ username: "" });
      await expect($(commonElements.flashMessage)).toHaveText(
        expect.stringContaining("Your username is invalid!")
      );
    });

    it("Should failed login with invalid password", async () => {
      await login({ password: "" });
      await expect($(commonElements.flashMessage)).toHaveText(
        expect.stringContaining("Your password is invalid!")
      );
    });
  });

  context("PoweredByLink verifications", async () => {
    it("Should Verify the poweredby link exists and verify its redirection", async () => {
      await browser.url(`/login`);
      await expect($(commonElements.poweredByLink)).toBeExisting();
      await $(commonElements.poweredByLink).click();

      await switchToNewTab();
      const newtabTitle = await browser.getTitle();
      await expect(newtabTitle).toContain("Elemental Selenium");
      await expect(browser).toHaveUrl("https://elementalselenium.com/");
    });
  });
});
