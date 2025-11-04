import page from "../pageElements/commonPageElements.json";
import { switchToNewTab } from "../helpers/navHelpers.js";

describe("debugging", () => {
  it("handle session", async () => {
    await browser.url(`/login`);
    await $(page.poweredByLink).click();
    console.log(await browser.getTitle());
    await switchToNewTab();
    console.log(await browser.getTitle());
    // await browser.debug();
  }).timeout(10 * 60000);
});
