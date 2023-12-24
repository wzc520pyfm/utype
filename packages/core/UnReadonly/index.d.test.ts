import type { UnReadonly } from "@unts-utility/core"
import { Equal, Expect } from "@unts-utility/shared"

type Case = {
  name: string;
}
type ReadonlyCase = {
  readonly name: string;
}

type cases = [
  Expect<Equal<UnReadonly<ReadonlyCase>, Case>>,
]
