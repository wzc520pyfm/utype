import type { ReadonlyKeys } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case1 = {
  readonly name: string;
  age: number;
  visible: boolean;
};
type ReadonlyKeysCase1 = "name";

type Case2 = {
  readonly name: string;
  readonly age: number;
  visible?: boolean;
};
type ReadonlyKeysCase2 = "name" | "age";

type cases = [
  Expect<Equal<ReadonlyKeys<Case1>, ReadonlyKeysCase1>>,
  Expect<Equal<ReadonlyKeys<Case2>, ReadonlyKeysCase2>>
];
