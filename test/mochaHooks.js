import { highlightLog } from "../constants.js";

const scopeColors = {
  describe: "green",
  context1: "yellow",
  context1Tests: "red",
  context2: "cyan",
  context2Tests: "magenta",
};

describe("Mocha Hooks - Test Suite", () => {
  //summary of before/beforeEach/after/afterEach is not printed in the report
  before("Top-level before hook - Executed before all contexts", () =>
    highlightLog(
      scopeColors.describe,
      "DESCRIBE - Top-level 'before' hook - Executed only once before all contexts"
    )
  );

  beforeEach(
    "Top-level beforeEach hook - Executed before each context but after context's before",
    async () =>
      highlightLog(
        scopeColors.describe,
        "DESCRIBE - Top-level 'beforeEach' hook - Executed before each context but after context's before"
      )
  );

  context("Nested Test Suite 1", () => {
    before("Nested before - Executed before all tests in Suite 1", async () => {
      highlightLog(
        scopeColors.context1,
        "CONTEXT 1 - Nested 'before' hook - Executed only once before all tests in context 1 (Test Suite 1) and before describe's beforeEach"
      );
    });

    beforeEach(
      "Nested beforeEach - Executed before each test in context 1 (Test Suite 1)",
      async () => {
        highlightLog(
          scopeColors.context1,
          "CONTEXT 1 - Nested 'beforeEach' hook - Executed before each test in context 1 (Test Suite 1)"
        );
      }
    );

    it("Test 1.A", async () => {
      highlightLog(scopeColors.context1Tests, "Context 1 (Suite 1) - Test 1");
    });

    it("Test 1.B", async () => {
      highlightLog(scopeColors.context1Tests, "Context 1 (Suite 1) - Test 2");
    });

    afterEach(
      "Nested afterEach - Executed after each test in context 1 (Test Suite 1)",
      () =>
        highlightLog(
          scopeColors.context1,
          "CONTEXT 1 - Nested 'afterEach' hook - Executed after each test in context 1 (Test Suite 1)"
        )
    );

    after(
      "Nested after - Executed after all tests in context 1 (Test Suite 1)",
      async () => {
        highlightLog(
          scopeColors.context1,
          "CONTEXT 1 - Nested 'after' hook - Executed  only once after all tests in context 1 (Test Suite 1) after describe's afterEach"
        );
      }
    );
  });

  context("Nested Test Suite 2", () => {
    before("Nested before - Executed before all tests in Suite 2", async () => {
      highlightLog(
        scopeColors.context2,
        "CONTEXT 2 - Nested 'before' hook - Executed only once before all tests in context 2 (Test Suite 2) and before describe's beforeEach"
      );
    });

    beforeEach(
      "Nested beforeEach - Executed before each test in context 2 (Test Suite 2)",
      async () => {
        highlightLog(
          scopeColors.context2,
          "CONTEXT 2 - Nested 'beforeEach' hook - Executed before each test in context 2 (Test Suite 2)"
        );
      }
    );

    it("Test 2.A", async () => {
      highlightLog(scopeColors.context2Tests, "context 2 (Suite 2) - Test 1");
    });

    it("Test 2.B", async () => {
      highlightLog(scopeColors.context2Tests, "context 2 (Suite 2) - Test 2");
    });

    afterEach(
      "Nested afterEach - Executed after each test in context 2 (Test Suite 2)",
      () =>
        highlightLog(
          scopeColors.context2,
          "CONTEXT 2 - Nested 'afterEach' hook - Executed after each test in context 2 (Test Suite 2)"
        )
    );

    after(
      "Nested after - Executed after all tests in context 2 (Test Suite 2) and after describe's afterEach",
      async () => {
        highlightLog(
          scopeColors.context2,
          "CONTEXT 2 - Nested 'after' hook - Executed only once after all tests in context 2 (Test Suite 2)"
        );
      }
    );
  });

  afterEach("Top-level afterEach - Executed after each context", async () => {
    highlightLog(
      scopeColors.describe,
      "DESCRIBE - Top-level 'afterEach hook' - Executed after each context but before context's after"
    );
  });

  after("Top-level after - Executed after all contexts", async () => {
    highlightLog(
      scopeColors.describe,
      "DESCRIBE - Top-level 'after' hook - Executed only once after all contexts"
    );
  });
});
