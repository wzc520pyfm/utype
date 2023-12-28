import type { NonFunctionKeys } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  name: string;
  getName: () => string;
};
type NonFunctionKeysCase1 = "name";

type Case2 = {
  name: string;
  age: number;
  getName: () => string;
  setName?: (name: string) => void;
};
type NonFunctionKeysCase2 = "name" | "age";

type Case3 = {
  name: string;
  age: number;
  getName: () => string;
  setName?: (name: string) => void;
  mapCase?: Map<string, number>;
};
type NonFunctionKeysCase3 = "name" | "age" | "mapCase";

type TT = NonFunctionKeys<Case2>;

type cases = [
  Expect<Equal<NonFunctionKeys<Case1>, NonFunctionKeysCase1>>,
  Expect<Equal<NonFunctionKeys<Case2>, NonFunctionKeysCase2>>,
  Expect<Equal<NonFunctionKeys<Case3>, NonFunctionKeysCase3>>
];
