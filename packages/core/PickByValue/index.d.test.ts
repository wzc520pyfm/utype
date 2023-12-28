import type { PickByValue } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueCase1 = { foo: number };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueCase2 = { foo: number; bar: number | undefined };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueCase3 = {};

type cases = [
  Expect<Equal<PickByValue<Case1, number>, PickByValueCase1>>,
  Expect<Equal<PickByValue<Case2, number | undefined>, PickByValueCase2>>,
  Expect<Equal<PickByValue<Case3, undefined>, PickByValueCase3>>
];
