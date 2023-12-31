import type { MergeAll, MergeLeftAll, MergeRightAll } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1Foo = { a: 1; b: 2 };
type Case1Bar = { a: 2 };
type Case1Baz = { c: 3 };
type MergeAllCase1 = {
  a: 1 | 2;
  b: 2;
  c: 3;
};

type Case2Foo = { a: 1; b: 2 };
type Case2Bar = { a: 2 };
type Case2Baz = { c: 3 };
type MergeLeftAllCase2 = {
  a: 1;
  b: 2;
  c: 3;
};

type Case3Foo = { a: 1; b: 2 };
type Case3Bar = { a: 2 };
type Case3Baz = { c: 3 };
type MergeRightAllCase3 = {
  a: 2;
  b: 2;
  c: 3;
};

type cases = [
  Expect<Equal<MergeAll<[Case1Foo, Case1Bar, Case1Baz]>, MergeAllCase1>>,
  Expect<
    Equal<MergeLeftAll<[Case2Foo, Case2Bar, Case2Baz]>, MergeLeftAllCase2>
  >,
  Expect<
    Equal<MergeRightAll<[Case3Foo, Case3Bar, Case3Baz]>, MergeRightAllCase3>
  >
];
