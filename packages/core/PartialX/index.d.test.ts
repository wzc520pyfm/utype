import type { PartialX } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type BaseCase = {
  name: string;
  age: number;
  address: string;
};

type PartialXCase1 = {
  name?: string;
  age: number;
  address: string;
};

type PartialXCase2 = {
  name?: string;
  age?: number;
  address: string;
};

type PartialXCase3 = {
  name?: string;
  age?: number;
  address?: string;
};

type cases = [
  Expect<Equal<PartialX<BaseCase, "name">, PartialXCase1>>,
  Expect<Equal<PartialX<BaseCase, "name" | "age">, PartialXCase2>>,
  Expect<Equal<PartialX<BaseCase>, PartialXCase3>>,
  Expect<Equal<PartialX<BaseCase>, Partial<BaseCase>>>
];

type errors = [
  // @ts-expect-error
  PartialX<BaseCase, "sports">
];
