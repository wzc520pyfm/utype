import { Keys, Equal, Expect } from "@utype/shared";

type Case1 = {
  readonly name: string;
  age: number;
  visible: boolean;
};
type KeysCase1 = "name" | "age" | "visible";

type cases = [Expect<Equal<Keys<Case1>, KeysCase1>>];
