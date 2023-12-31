import type { ReadonlyX } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  name: string;
  age: number;
};
type ReadonlyXCase1 = {
  readonly name: string;
  readonly age: number;
};

type Case2 = {
  name: string;
  age: number;
};
type ReadonlyXCase2 = {
  readonly name: string;
  age: number;
};

type Case3 = {
  name: string;
  age: number;
  visible: boolean;
};
type ReadonlyXCase3 = {
  readonly name: string;
  readonly age: number;
  visible: boolean;
};

type cases = [
  Expect<Equal<ReadonlyX<Case1>, ReadonlyXCase1>>,
  Expect<Equal<ReadonlyX<Case2, "name">, ReadonlyXCase2>>,
  Expect<Equal<ReadonlyX<Case3, "name" | "age">, ReadonlyXCase3>>
];
