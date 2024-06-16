import type { RecordToUnion } from "@utype/shared";
import { Equal, Expect } from "@utype/shared";

type Case1 = { name: string; visible: boolean; };
type RecordToUnionCase1 = string | boolean

type Case2 = { name: string; visible?: boolean; };
type RecordToUnionCase2 = string | boolean | undefined

type cases = [
  Expect<Equal<RecordToUnion<Case1>, RecordToUnionCase1>>,
  Expect<Equal<RecordToUnion<Case2>, RecordToUnionCase2>>,
];
