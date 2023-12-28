import type { Nullable } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = string;
type NullableCase1 = string | null | undefined;

type cases = [Expect<Equal<Nullable<Case1>, NullableCase1>>];
