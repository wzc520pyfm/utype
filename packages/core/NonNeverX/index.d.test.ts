import type { NonNeverX } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  name: string;
  age: never;
  visible: boolean;
};
type NonNeverXCase1 = string | boolean;

type Case2 = {
  readonly name: "Alice";
  readonly age: "40";
};
type NonNeverXCase2 = "Alice" | "40";
type TT = NonNeverX<Case2>;

type cases = [
  Expect<Equal<NonNeverX<Case1>, NonNeverXCase1>>,
  Expect<Equal<NonNeverX<Case2>, NonNeverXCase2>>
];
