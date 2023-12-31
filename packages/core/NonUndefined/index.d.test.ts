import type { NonUndefined } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = string | undefined;
type NonUndefinedCase1 = string;

type Case2 = string | number[] | undefined;
type NonUndefinedCase2 = string | number[];

type cases = [
  Expect<Equal<NonUndefined<Case1>, NonUndefinedCase1>>,
  Expect<Equal<NonUndefined<Case2>, NonUndefinedCase2>>
];
