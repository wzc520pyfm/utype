import type { TwoTuple } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case = [string, string];
type TwoTupleCase = TwoTuple<string>;

type cases = [Expect<Equal<TwoTupleCase, Case>>];
