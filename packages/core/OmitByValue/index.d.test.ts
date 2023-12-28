import type { OmitByValue } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueCase1 = { bar: number | undefined; faz: boolean };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueCase2 = { faz: boolean };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueCase3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};

type cases = [
  Expect<Equal<OmitByValue<Case1, number>, OmitByValueCase1>>,
  Expect<Equal<OmitByValue<Case2, number | undefined>, OmitByValueCase2>>,
  Expect<Equal<OmitByValue<Case3, undefined>, OmitByValueCase3>>
];
