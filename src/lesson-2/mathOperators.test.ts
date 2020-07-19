import { mul, div, add, minus, squared, exponent, factorial, sin, cos, tan, fib } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it( "squared 4 **", () => {
    expect(squared(4)).toBe(16);
  })

  it( "exponent 2 ^ 3", () => {
    expect(exponent(2, 3)).toBe(8);
  })

  it( "factorial 5 !", () => {
    expect(factorial(5)).toBe(120);
  })

  it("sin 90", () => {
    expect(sin(90)).toEqual(0.8939966636005579);
  });

  it("cos 0", () => {
    expect(cos(0)).toEqual(1);
  });

  it("tan 1", () => {
    expect(tan(1)).toEqual(1.5574077246549023);
  });

  it("fib 10", () => {
    expect(fib(10)).toEqual(55);
  });

});
