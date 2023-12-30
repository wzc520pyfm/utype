import type { Mutable } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case = {
  name: string;
};
type ReadonlyCase = {
  readonly name: string;
};

type cases = [Expect<Equal<Mutable<ReadonlyCase>, Case>>];
