import type { RequiredKeys } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  name: string;
  age?: number;
  visible?: boolean;
};
type RequiredKeysCase1 = "name";

type Case2 = {
  name: string;
  readonly age: number;
  visible?: boolean;
};
type RequiredKeysCase2 = "name" | "age";

type cases = [
  Expect<Equal<RequiredKeys<Case1>, RequiredKeysCase1>>,
  Expect<Equal<RequiredKeys<Case2>, RequiredKeysCase2>>
];
