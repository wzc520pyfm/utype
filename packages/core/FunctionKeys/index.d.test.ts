import type { FunctionKeys } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  name: string;
  getName: () => string;
};
type FunctionKeysCase1 = "getName";

type Case2 = {
  name: string;
  getName: () => string;
  setName?: (name: string) => void;
};
type FunctionKeysCase2 = "setName" | "getName";

type TT = FunctionKeys<Case2>;

type cases = [
  Expect<Equal<FunctionKeys<Case1>, FunctionKeysCase1>>,
  Expect<Equal<FunctionKeys<Case2>, FunctionKeysCase2>>
];
