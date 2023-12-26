import type { ReadonlyKeys } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = {
  readonly name: string;
  age: number;
  visible: boolean;
};
type ReadonlyKeysCase1 = 'name';

type Case2 = {
  readonly name: string;
  readonly age: number;
  visible?: boolean;
};
type ReadonlyKeysCase2 = 'name' | 'age';
type TT = ReadonlyKeys<Case2>

type cases = [
  Expect<Equal<ReadonlyKeys<Case1>, ReadonlyKeysCase1>>,
  Expect<Equal<ReadonlyKeys<Case2>, ReadonlyKeysCase2>>,
];
