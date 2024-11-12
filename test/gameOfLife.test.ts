// import { expect } from "vitest";
import { dummy } from "../src/gameOfLife.js";

describe("dummy", () => {
  it("returns true", () => {
    expect(dummy()).toBe(true);
  });
});
