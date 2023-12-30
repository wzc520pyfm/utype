import type { OmitByTypeFuzzy } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeFuzzyCase1 = { faz: boolean };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeFuzzyCase2 = { foo: number };

type Case3 = {
  foo: number;
  bar?: number;
  faz: boolean;
};
type OmitByTypeFuzzyCase3 = {
  foo: number;
  faz: boolean;
};

type cases = [
  Expect<Equal<OmitByTypeFuzzy<Case1, number>, OmitByTypeFuzzyCase1>>,
  Expect<
    Equal<OmitByTypeFuzzy<Case2, boolean | undefined>, OmitByTypeFuzzyCase2>
  >,
  Expect<Equal<OmitByTypeFuzzy<Case3, undefined>, OmitByTypeFuzzyCase3>>
];
