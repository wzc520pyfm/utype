import type { PickByValueExact } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueExactCase1 = { foo: number };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueExactCase2 = { bar: number | undefined };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueExactCase3 = {};

type cases = [
  Expect<Equal<PickByValueExact<Case1, number>, PickByValueExactCase1>>,
  Expect<Equal<PickByValueExact<Case2, number | undefined>, PickByValueExactCase2>>,
  Expect<Equal<PickByValueExact<Case3, undefined>, PickByValueExactCase3>>
];
