import type { Merge } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1Foo = {
  name: string;
  age: number;
};
type Case1Bar = {
  age: number;
  sex: string;
};
type MergeCase1 = {
  name: string;
  age: number;
  sex: string;
};

type Case2Foo = {
  name?: string;
  age?: boolean;
};
type Case2Bar = {
  age: number;
  sex: string;
};
type MergeCase2 = {
  name?: string;
  age: number;
  sex: string;
};

type cases = [
  Expect<Equal<Merge<Case1Foo, Case1Bar>, MergeCase1>>,
  Expect<Equal<Merge<Case2Foo, Case2Bar>, MergeCase2>>
];
