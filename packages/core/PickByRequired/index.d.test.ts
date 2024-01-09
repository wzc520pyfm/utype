import type { PickByRequired } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  foo: number;
  bar?: string;
};
type PickByTypeCase1 = { foo: number };

type Case2 = {
  foo: undefined;
  bar?: undefined;
};
type PickByTypeCase2 = { foo: undefined; };

type Case3 = {
  foo?: number;
  bar?: number | undefined;
  faz?: boolean;
};
type PickByTypeCase3 = {};

type cases = [
  Expect<Equal<PickByRequired<Case1>, PickByTypeCase1>>,
  Expect<Equal<PickByRequired<Case2>, PickByTypeCase2>>,
  Expect<Equal<PickByRequired<Case3>, PickByTypeCase3>>
];
