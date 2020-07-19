import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("1 * 32", () => {
    expect(runner("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(runner("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(runner("2 + 32")).toEqual(34);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("2 * 2 * 3", () => {
    expect(runner("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(runner("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(runner("2 + 2 * 3")).toEqual(8);
  });
});

describe("Runner long cases", () => {
  it("20 + 1 * 10 - 5 * 3", () => {
    expect(runner("20 + 1 * 10 - 5 * 3")).toEqual(15);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(runner("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });
});

describe("Runner cases for the lesson #2 task #2", () => {
  it("2 **", () => {
    expect(runner("2 **")).toEqual(4);
  });

  it("2 ^ 3", () => {
    expect(runner("2 ^ 3")).toEqual(8);
  });

  it("5 !", () => {
    expect(runner("5 !")).toEqual(120);
  });
});

describe("Runner cases for the lesson #2 task #3", () => {
  it("sin 90", () => {
    expect(runner("90 sin")).toEqual(0.8939966636005579);
  });

  it("cos 0", () => {
    expect(runner("0 cos")).toEqual(1);
  });

  it("tan 1", () => {
    expect(runner("1 tan")).toEqual(1.5574077246549023);
  });

  it("fib 10", () => {
    expect(runner("10 fib")).toEqual(55);
  });
});
