import type { Intersection } from "@utype/core";
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
type IntersectionCase = {
  age: number;
};

type cases = [Expect<Equal<Intersection<Case, DefaultCase>, IntersectionCase>>];
