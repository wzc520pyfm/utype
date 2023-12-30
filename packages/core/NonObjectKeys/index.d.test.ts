import type { NonObjectKeys } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

type Case1 = {
  name: string;
  hobby: { title: string; description: string };
};
type NonObjectKeysCase1 = "name";

type Case2 = {
  name: string;
  hobby: { title: string; description: string };
  sports?: { title: string; description: string };
  getName?: () => string;
};
type NonObjectKeysCase2 = "name" | "getName";

type Case3 = {
  name: string;
  hobby: { title: string; description: string };
  functionCase: () => string;
  mapCase: Map<string, number>;
  weakmapCase: WeakMap<{}, number>;
  setCase: Set<string>;
  weaksetCase: WeakSet<{}>;
  nullCase: null;
};
type NonObjectKeysCase3 =
  | "name"
  | "functionCase"
  | "mapCase"
  | "weakmapCase"
  | "setCase"
  | "weaksetCase"
  | "nullCase";

type cases = [
  Expect<Equal<NonObjectKeys<Case1>, NonObjectKeysCase1>>,
  Expect<Equal<NonObjectKeys<Case2>, NonObjectKeysCase2>>,
  Expect<Equal<NonObjectKeys<Case3>, NonObjectKeysCase3>>
];
