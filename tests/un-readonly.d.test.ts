import type { UnReadonly } from "../src/un-readonly"
import { Equal, Expect } from "../utils";

type Case = {
  name: string;
}
type ReadonlyCase = {
  readonly name: string;
}

type cases = [
  Expect<Equal<UnReadonly<ReadonlyCase>, Case>>,
]
