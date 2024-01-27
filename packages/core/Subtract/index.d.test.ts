import type { Subtract } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case = {
  name: string;
  age: number;
  visible: boolean;
};
type DefaultCase = {
  age: number;
  sex: string;
};
type SubtractCase = {
  name: string;
  visible: boolean;
};

type cases = [Expect<Equal<Subtract<Case, DefaultCase>, SubtractCase>>];
