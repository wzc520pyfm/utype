import type { MergeAll } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1Foo = { a: 1; b: 2 };
type Case1Bar = { a: 2 };
type Case1Baz = { c: 3 };
type MergeAllCase1 = {
  a: 2;
  b: 2;
  c: 3;
};

type cases = [
  Expect<Equal<MergeAll<[Case1Foo, Case1Bar, Case1Baz]>, MergeAllCase1>>,
];
