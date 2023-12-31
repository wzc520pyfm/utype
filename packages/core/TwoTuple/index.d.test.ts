import type { TwoTuple } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case = [string, string];
type TwoTupleCase = TwoTuple<string>;

type cases = [Expect<Equal<TwoTupleCase, Case>>];
