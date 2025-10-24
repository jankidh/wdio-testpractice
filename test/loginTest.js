import { expect, browser, $ } from "@wdio/globals";
import { login } from "../helpers/navHelpers.js";
import { logout } from "../helpers/navHelpers.js";
import loginPage from "../pageElements/loginPage.json";
import commonElements from "../pageElements/commonPageElements.json";
import { baseUrl } from "../constants.js";

describe("My Login application", () => {
  it("login with valid credentials", async () => {
    //Successfull login
    await login();
    await expect($(commonElements.flashMessage)).toBeExisting();
    await expect($(commonElements.flashMessage)).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );

    await expect($(commonElements.logoutButton)).toBeExisting();
    await expect($(commonElements.logoutButton)).toHaveText(
      expect.stringContaining("Logout")
    );
    console.log("Login test passed successfully");
  });

  it("should logout succesfully and redirect to login page", async () => {
    // Click Logout and verify message and redirect
    await logout();
    await expect($(commonElements.flashMessage)).toBeExisting();
    await expect($(commonElements.flashMessage)).toHaveText(
      expect.stringContaining("You logged out of the secure area!")
    );
    await expect(browser).toHaveUrl(`${baseUrl}/login`);

    console.log("Logout test passed successfully");
  });

  it("should failed login with invalid username", async () => {
    await login({ username: "" });
    await expect($(commonElements.flashMessage)).toHaveText(
      expect.stringContaining("Your username is invalid!")
    );
  });

  it("should failed login with invalid password", async () => {
    await login({ password: "" });
    await expect($(commonElements.flashMessage)).toHaveText(
      expect.stringContaining("Your password is invalid!")
    );
  });

  // it("should Verify the Poweredby link exists and text is correct", async () => {
  //   // poweredby Link on login page
  //   await expect($(pageElements.poweredByLink)).toBeExisting();
  //   await expect($(pageElements.poweredByLink)).toHaveText(
  //     expect.stringContaining("Elemental Selenium")
  //   );

  //   // await $(pageElements.poweredByLink).click();
  //   // await expect($('#flash')).toMatchElementSnapshot('flashAlert')
  //   //  await browser.debug()
  //   console.log("Powered by link test passed Successfully");
  // });
}).timeout(10 * 60000);
