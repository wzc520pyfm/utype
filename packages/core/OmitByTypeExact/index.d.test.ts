import type { OmitByTypeExact } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeExactCase1 = { bar: number | undefined; faz: boolean };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeExactCase2 = { foo: number; faz: boolean };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByTypeExactCase3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};

type cases = [
  Expect<Equal<OmitByTypeExact<Case1, number>, OmitByTypeExactCase1>>,
  Expect<
    Equal<OmitByTypeExact<Case2, number | undefined>, OmitByTypeExactCase2>
  >,
  Expect<Equal<OmitByTypeExact<Case3, undefined>, OmitByTypeExactCase3>>
];
