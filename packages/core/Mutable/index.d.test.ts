import type { Mutable } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case = {
  name: string;
};
type ReadonlyCase = {
  readonly name: string;
};

type cases = [Expect<Equal<Mutable<ReadonlyCase>, Case>>];
