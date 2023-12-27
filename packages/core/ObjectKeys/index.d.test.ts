import type { ObjectKeys } from "@unts-utility/core";
import { Equal, Expect } from "@unts-utility/shared";

type Case1 = {
  name: string;
  hobby: { title: string; description: string };
  getName: () => string;
};
type ObjectKeysCase1 = "hobby";

type Case2 = {
  name: string;
  hobby: { title: string; description: string };
  sports?: { title: string; description: string };
  getName?: () => string;
};
type ObjectKeysCase2 = "hobby" | "sports";

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
type ObjectKeysCase3 = "hobby";

type cases = [
  Expect<Equal<ObjectKeys<Case1>, ObjectKeysCase1>>,
  Expect<Equal<ObjectKeys<Case2>, ObjectKeysCase2>>,
  Expect<Equal<ObjectKeys<Case3>, ObjectKeysCase3>>,
];
