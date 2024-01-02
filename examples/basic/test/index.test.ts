import type { MutableUser } from "../src";
import type { Expect, Equal } from "@utype/shared";

type MutableCase = {
  name: string;
  age: number;
  visible?: boolean;
}

type cases = [
  Expect<Equal<MutableUser, MutableCase>>
]
