import type { PickByValueFuzzy } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueFuzzyCase1 = { foo: number; bar: number | undefined };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByValueFuzzyCase2 = { foo: number; bar: number | undefined };

type Case3 = {
  foo: number;
  bar?: number;
  faz: boolean;
};
type PickByValueFuzzyCase3 = { bar?: number };

type cases = [
  Expect<Equal<PickByValueFuzzy<Case1, number>, PickByValueFuzzyCase1>>,
  Expect<
    Equal<PickByValueFuzzy<Case2, number | undefined>, PickByValueFuzzyCase2>
  >,
  Expect<Equal<PickByValueFuzzy<Case3, undefined>, PickByValueFuzzyCase3>>
];
