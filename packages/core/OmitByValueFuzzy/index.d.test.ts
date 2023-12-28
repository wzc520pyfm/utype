import type { OmitByValueFuzzy } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueFuzzyCase1 = { faz: boolean };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueFuzzyCase2 = { foo: number };

type Case3 = {
  foo: number;
  bar?: number;
  faz: boolean;
};
type OmitByValueFuzzyCase3 = {
  foo: number;
  faz: boolean;
};

type cases = [
  Expect<Equal<OmitByValueFuzzy<Case1, number>, OmitByValueFuzzyCase1>>,
  Expect<
    Equal<OmitByValueFuzzy<Case2, boolean | undefined>, OmitByValueFuzzyCase2>
  >,
  Expect<Equal<OmitByValueFuzzy<Case3, undefined>, OmitByValueFuzzyCase3>>
];
