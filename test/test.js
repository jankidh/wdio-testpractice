import { login } from "../helpers/navHelpers.js";

describe("debug login", () => {
  it("Successfull login", async () => {
    await login();
  });
  it("invalid username", async () => {
    await login({ username: "" });
  });
  it("Invalid password", async () => {
    await login({ password: "" });
  });
});
