import type { TwoTuple } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case = [string, string];
type TwoTupleCase = TwoTuple<string>;

type cases = [Expect<Equal<TwoTupleCase, Case>>];
