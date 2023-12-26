import type { NonUndefined } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = string | undefined;
type NonUndefinedCase1 = string;

type Case2 = string | number[] | undefined;
type NonUndefinedCase2 = string | number[];

type cases = [
  Expect<Equal<NonUndefined<Case1>, NonUndefinedCase1>>,
  Expect<Equal<NonUndefined<Case2>, NonUndefinedCase2>>,
];
