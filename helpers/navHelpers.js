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
