import type { OmitByValueExact } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueExactCase1 = { bar: number | undefined; faz: boolean };

type Case2 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueExactCase2 = { foo: number; faz: boolean };

type Case3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};
type OmitByValueExactCase3 = {
  foo: number;
  bar: number | undefined;
  faz: boolean;
};

type cases = [
  Expect<Equal<OmitByValueExact<Case1, number>, OmitByValueExactCase1>>,
  Expect<
    Equal<OmitByValueExact<Case2, number | undefined>, OmitByValueExactCase2>
  >,
  Expect<Equal<OmitByValueExact<Case3, undefined>, OmitByValueExactCase3>>
];
