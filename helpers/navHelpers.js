import { baseUrl, userId, userSecretKey } from "../constants.js";
import loginPage from "../pageElements/loginPage.json";
import commonElements from "../pageElements/commonPageElements.json";

export const login = async (params = {}) => {
  const { username = userId, password = userSecretKey } = params;
  const loginPageUrl = `${baseUrl}/login`;
  await browser.url(loginPageUrl);
  await $(loginPage.username).setValue(username);
  await $(loginPage.password).setValue(password);
  await $(loginPage.loginButton).click();
  await $(commonElements.flashMessage).waitForExist({
    timeoutMsg: `login action is failed due to timeout, credentials : username = ${username}, password = ${password}; url=${loginPageUrl}`,
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
    timeoutMsg: `Logiut button ${commonElements.logoutButton}still displayed after timeout`,
  });
  await $(commonElements.flashMessage).waitForExist({
    timeoutMsg: "Logout flash message did not appear after logout",
  });
};
