import type { MutableX } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case1 = {
  readonly name: string;
  readonly age: number;
};
type MutableXCase1 = {
  name: string;
  age: number;
};

type Case2 = {
  readonly name: string;
  readonly age: number;
};
type MutableXCase2 = {
  name: string;
  readonly age: number;
};

type Case3 = {
  readonly name: string;
  readonly age: number;
  readonly visible: boolean;
};
type MutableXCase3 = {
  name: string;
  age: number;
  readonly visible: boolean;
};

type cases = [
  Expect<Equal<MutableX<Case1>, MutableXCase1>>,
  Expect<Equal<MutableX<Case2, "name">, MutableXCase2>>,
  Expect<Equal<MutableX<Case3, "name" | "age">, MutableXCase3>>
];
