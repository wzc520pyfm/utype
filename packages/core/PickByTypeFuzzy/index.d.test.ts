import type { PickByTypeFuzzy } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeFuzzyCase1 = { foo: number; bar: number | undefined };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type PickByTypeFuzzyCase2 = { foo: number; bar: number | undefined };

type Case3 = {
  foo: number;
  bar?: number;
  faz: boolean;
};
type PickByTypeFuzzyCase3 = { bar?: number };

type cases = [
  Expect<Equal<PickByTypeFuzzy<Case1, number>, PickByTypeFuzzyCase1>>,
  Expect<
    Equal<PickByTypeFuzzy<Case2, number | undefined>, PickByTypeFuzzyCase2>
  >,
  Expect<Equal<PickByTypeFuzzy<Case3, undefined>, PickByTypeFuzzyCase3>>
];
