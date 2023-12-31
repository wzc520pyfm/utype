import type { OmitByType } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeCase1 = { bar: number | undefined; faz: boolean };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeCase2 = { faz: boolean };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeCase3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};

type cases = [
  Expect<Equal<OmitByType<Case1, number>, OmitByTypeCase1>>,
  Expect<Equal<OmitByType<Case2, number | undefined>, OmitByTypeCase2>>,
  Expect<Equal<OmitByType<Case3, undefined>, OmitByTypeCase3>>
];
