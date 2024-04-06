import type { OptionalTupleLast } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = [string, number, boolean];
type OptionalTupleCase1 = [string, number, boolean?];

type Case2 = [string, number];
type OptionalTupleCase2 = [string, number?];

type cases = [
  Expect<Equal<OptionalTupleLast<Case1>, OptionalTupleCase1>>,
  Expect<Equal<OptionalTupleLast<Case2>, OptionalTupleCase2>>
];
