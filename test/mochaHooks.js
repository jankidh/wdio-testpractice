describe("Mocha Hooks - Test Suite", () => {
  let method;
  before("Top-Level before hook - Executed before all contexts", async () =>
    //this summary won't be displayed in report
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Top-Level before hook - Executed before all contexts"
    )
  );
  beforeEach("Top-Level beforeEach - Executed before each context", async () =>
    //this summary won't be displayed in report
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Top-Level beforeEach - Executed before each context"
    )
  );
  method = "get";
  console.log("\x1b[32m%s\x1b[0m", "context 1");
  context("Nested Test Suite 1", () => {
    console.log(method);
    before(() =>
      console.log(
        "\x1b[35m%s\x1b[0m",
        "Nested before - Executed before all tests in Suite 1"
      )
    );
    beforeEach(() =>
      console.log(
        "\x1b[35m%s\x1b[0m",
        "Nested beforeEach - Executed before each test in Suite 1"
      )
    );
    it("test 1.A", () => {});
    it("test 1.B", () => {});
    afterEach(() =>
      console.log("Nested afterEach - Executed after each test in Suite 1")
    );
    after(() =>
      console.log("Nested after - Executed after all test in Suite 1")
    );
  });

  method = "post";
  console.log("\x1b[32m%s\x1b[0m", "context 2");
  context("Nested Test Suite 2", () => {
    console.log(method);
    before(() =>
      console.log("Nested before - Executed before all tests in Suite 2")
    );
    beforeEach(() =>
      console.log("Nested beforeEach - Executed before each test in Suite 2")
    );
    it("test 2.A", () => {});
    it("test 2.B", () => {});
    afterEach(() =>
      console.log("Nested afterEach - Executed after each test in Suite 2")
    );
    after(() =>
      console.log("Nested after - Executed after all test in Suite 2")
    );
  });

  after(() => console.log("Top-Level after - Executed after all contexts"));
  afterEach(() =>
    console.log("Top-Level afterEach - Executed after each context")
  );
});
