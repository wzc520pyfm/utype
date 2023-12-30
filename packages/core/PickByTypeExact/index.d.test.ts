import type { PickByTypeExact } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeExactCase1 = { foo: number };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeExactCase2 = { bar: number | undefined };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeExactCase3 = {};

type cases = [
  Expect<Equal<PickByTypeExact<Case1, number>, PickByTypeExactCase1>>,
  Expect<
    Equal<PickByTypeExact<Case2, number | undefined>, PickByTypeExactCase2>
  >,
  Expect<Equal<PickByTypeExact<Case3, undefined>, PickByTypeExactCase3>>
];
