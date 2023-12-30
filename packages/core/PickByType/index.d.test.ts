import type { PickByType } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeCase1 = { foo: number };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeCase2 = { foo: number; bar: number | undefined };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeCase3 = {};

type cases = [
  Expect<Equal<PickByType<Case1, number>, PickByTypeCase1>>,
  Expect<Equal<PickByType<Case2, number | undefined>, PickByTypeCase2>>,
  Expect<Equal<PickByType<Case3, undefined>, PickByTypeCase3>>
];
