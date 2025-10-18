import { userId, userSecretKey } from "../constants.js";
import loginPage from "../pageElements/loginPage.json" assert { type: "json" };
import commonPageElements from "../pageElements/commonPageElements.json" assert { type: "json" };

export const login = async (options = {}) => {
  const { username = userId, password = userSecretKey } = options;
  await browser.url(`/login`);
  await $(loginPage.username).setValue(username);
  await $(loginPage.password).setValue(password);
  await $(loginPage.loginButton).click();
  await $(commonPageElements.flashMessage).waitForExist();
};

export const logout = async () => {
  await $(commonPageElements.logoutButton).waitForExist({
    timeout: 30000,
    timeoutMsg: `Logout button ${commonPageElements.logoutButton} has not appeared within the timeout`,
  });
  await $(commonPageElements.logoutButton).click();
  await $(commonPageElements.logoutButton).waitForExist({
    reverse: true,
    timeout: 30000,
    timeoutMsg: `Logout button ${commonPageElements.logoutButton} is still displayed after the timeout`,
  });
};

export const switchToNewTab = async (newPageName, numberOfTabs = 2) => {
  if (numberOfTabs < 1) {
    throw new Error("numberOfTabs must be at least 1 to switch to a new tab");
  }

  await browser.waitUntil(
    async () => (await browser.getWindowHandles()).length >= numberOfTabs,
    {
      timeout: 30000,
      timeoutMsg: `${newPageName} tab was not found within the timeout.`,
    }
  );

  const openWindows = await browser.getWindowHandles();
  const newTabHandle = openWindows[openWindows.length - 1];

  await browser.switchToWindow(newTabHandle);
  return newTabHandle;
};
