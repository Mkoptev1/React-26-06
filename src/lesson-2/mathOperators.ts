export type ScalarOperationTypeOne = (first: number) => number;
export type ScalarOperationType = (first: number, second: number) => number;

function factorialLocal(n: number): number {
  return n != 1 ? n * factorialLocal(n - 1) : 1;
}

function fibLocal(n: number) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const squared: ScalarOperationTypeOne = (first: number): number =>
  Math.pow(first, 2);

export const exponent: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const factorial: ScalarOperationTypeOne = (first: number): number =>
  factorialLocal(first);

export const sin: ScalarOperationTypeOne = (first: number): number =>
  Math.sin(first);

export const cos: ScalarOperationTypeOne = (first: number): number =>
  Math.cos(first);

export const tan: ScalarOperationTypeOne = (first: number): number =>
  Math.tan(first);

export const fib: ScalarOperationTypeOne = (first: number): number =>
  fibLocal(first);

export const mathOperators: {
  [key: string]: ScalarOperationType | ScalarOperationTypeOne;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": exponent,
};

export const mathOperatorsSingle: { [key: string]: ScalarOperationTypeOne } = {
  "**": squared,
  "!": factorial,
  sin: sin,
  cos: cos,
  tan: tan,
  fib: fib,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "**": FIRST,
  "^": FIRST,
  "!": FIRST,
  "+": SECOND,
  "-": SECOND,
};
