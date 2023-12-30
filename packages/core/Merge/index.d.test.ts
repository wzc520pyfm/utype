import type { Merge, MergeLeft, MergeRight } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

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
  name: string;
  age: boolean;
};
type Case2Bar = {
  age: number;
  sex: string;
};
type MergeCase2 = {
  name: string;
  age: number | boolean;
  sex: string;
};

type Case3Foo = {
  readonly name: string;
  readonly tt?: string;
  age?: boolean;
};
type Case3Bar = {
  tt: string[];
  age: number;
  sex?: string;
};
type MergeCase3 = {
  readonly name: string;
  readonly tt?: string | string[];
  age?: number | boolean;
  sex?: string;
};

type Case4Foo = {
  readonly name: string;
  readonly tt?: string;
  age: boolean;
};
type Case4Bar = {
  tt: string[];
  age?: number;
  sex?: string;
};
type MergeLeftCase4 = {
  readonly name: string;
  readonly tt?: string;
  age: boolean;
  sex?: string;
};

type Case5Foo = {
  readonly name: string;
  readonly tt?: string;
  age: boolean;
};
type Case5Bar = {
  tt: string[];
  age?: number;
  sex?: string;
};
type MergeRightCase5 = {
  readonly name: string;
  tt: string[];
  age?: number;
  sex?: string;
};

type cases = [
  Expect<Equal<Merge<Case1Foo, Case1Bar>, MergeCase1>>,
  Expect<Equal<Merge<Case2Foo, Case2Bar>, MergeCase2>>,
  Expect<Equal<Merge<Case3Foo, Case3Bar>, MergeCase3>>,
  Expect<Equal<MergeLeft<Case4Foo, Case4Bar>, MergeLeftCase4>>,
  Expect<Equal<MergeRight<Case5Foo, Case5Bar>, MergeRightCase5>>
];
