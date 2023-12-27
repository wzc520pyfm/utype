import type { Nullable } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = string;
type NullableCase1 = string | null | undefined;

type cases = [
  Expect<Equal<Nullable<Case1>, NullableCase1>>
];
