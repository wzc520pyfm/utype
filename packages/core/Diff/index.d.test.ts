import type { Diff } from "@utype/core";
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
type DiffCase = {
  name: string;
  visible: boolean;
  sex: string;
};

type TT = Diff<Case, DefaultCase>

type cases = [Expect<Equal<Diff<Case, DefaultCase>, DiffCase>>];