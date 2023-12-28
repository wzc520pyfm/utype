import type { Mutable } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case = {
  name: string;
};
type ReadonlyCase = {
  readonly name: string;
};

type cases = [Expect<Equal<Mutable<ReadonlyCase>, Case>>];
