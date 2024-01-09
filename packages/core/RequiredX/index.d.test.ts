import type { RequiredX } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type BaseCase = {
  name?: string;
  age?: number;
  address?: string;
};

type RequiredXCase1 = {
  name: string;
  age?: number;
  address?: string;
};

type RequiredXCase2 = {
  name: string;
  age: number;
  address?: string;
};

type RequiredXCase3 = {
  name: string;
  age: number;
  address: string;
};

type cases = [
  Expect<Equal<RequiredX<BaseCase, "name">, RequiredXCase1>>,
  Expect<Equal<RequiredX<BaseCase, "name" | "age">, RequiredXCase2>>,
  Expect<Equal<RequiredX<BaseCase>, RequiredXCase3>>,
  Expect<Equal<RequiredX<BaseCase>, Required<BaseCase>>>
];

type errors = [
  // @ts-expect-error
  RequiredX<BaseCase, "sports">
];
