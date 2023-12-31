import type { PartialKeys } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  name: string;
  age?: number;
  visible?: boolean;
};
type PartialKeysCase1 = "age" | "visible";

type Case2 = {
  readonly name?: string;
  readonly age?: number;
  visible: boolean;
};
type PartialKeysCase2 = "name" | "age";

type cases = [
  Expect<Equal<PartialKeys<Case1>, PartialKeysCase1>>,
  Expect<Equal<PartialKeys<Case2>, PartialKeysCase2>>
];
