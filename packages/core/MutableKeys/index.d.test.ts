import type { MutableKeys } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case1 = {
  name: string;
  readonly age: number;
  readonly visible: boolean;
};
type MutableKeysCase1 = "name";

type Case2 = {
  name: string;
  age: number;
  readonly visible?: boolean;
};
type MutableKeysCase2 = "name" | "age";

type cases = [
  Expect<Equal<MutableKeys<Case1>, MutableKeysCase1>>,
  Expect<Equal<MutableKeys<Case2>, MutableKeysCase2>>
];
