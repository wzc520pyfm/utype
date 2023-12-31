import type { OmitNever } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  name: string;
  age: never;
  visible: boolean;
};
type OmitNeverCase1 = string | boolean;

type Case2 = {
  readonly name: "Alice";
  readonly age: "40";
};
type OmitNeverCase2 = "Alice" | "40";
type TT = OmitNever<Case2>;

type cases = [
  Expect<Equal<OmitNever<Case1>, OmitNeverCase1>>,
  Expect<Equal<OmitNever<Case2>, OmitNeverCase2>>
];
