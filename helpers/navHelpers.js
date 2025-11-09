import { userId, userSecretKey } from "../constants.js";
import loginPage from "../pageElements/loginPage.json";
import commonElements from "../pageElements/commonPageElements.json";

export const login = async (params = {}) => {
  const { username = userId, password = userSecretKey } = params;
  await browser.url(`/login`);
  await $(loginPage.username).setValue(username);
  await $(loginPage.password).setValue(password);
  await $(loginPage.loginButton).click();
  await $(commonElements.flashMessage).waitForExist({
    timeoutMsg: `Login action failed due to timeout. Current page: ${await browser.getUrl()}; Credentials: username = ${username}, password = ${password} `,
  });
};

export const logout = async () => {
  await $(commonElements.logoutButton).waitForExist({
    timeout: 30000,
    timeoutMsg: `Logout button ${commonElements.logoutButton} has not displayed within the time`,
  });
  await $(commonElements.logoutButton).click();
  await $(commonElements.logoutButton).waitForExist({
    reverse: true,
    timeout: 30000,
    timeoutMsg: `Logout button ${commonElements.logoutButton} still displayed after timeout`,
  });
  await $(loginPage.loginButton).waitForExist({
    timeoutMsg: "Login button is not appeared after logout",
  });
};

export const switchToNewTab = async (numberOfTabs = 2) => {
  await browser.waitUntil(
    async () => (await browser.getWindowHandles()).length === numberOfTabs,
    {
      timeout: 30000,
      timeoutMsg: `Current number of tabs ${
        (
          await browser.getWindowHandles()
        ).length
      } doesn't match expected numbers ${numberOfTabs}`,
    }
  );
  const openWindows = await browser.getWindowHandles(),
    newTabHandle = openWindows[openWindows.length - 1];

  await browser.switchWindow(newTabHandle);
};
