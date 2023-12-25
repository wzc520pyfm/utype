import type { TwoTuple } from "@unts-utility/core"
import { Equal, Expect } from "@unts-utility/shared"

type Case = [string, string]
type TwoTupleCase = TwoTuple<string>

type cases = [
  Expect<Equal<TwoTupleCase, Case>>,
]
