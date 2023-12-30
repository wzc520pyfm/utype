import type { Nullable } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case1 = string;
type NullableCase1 = string | null | undefined;

type cases = [Expect<Equal<Nullable<Case1>, NullableCase1>>];
