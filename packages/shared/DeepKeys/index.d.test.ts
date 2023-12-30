import { DeepKeys, Expect, Equal } from "@utility-ts/shared";

type Case1 = {
  name: string;
  age: number;
  objCase?: {
    a: string;
    b: {
      c?: string;
    };
  };
};
type DeepKeysCase1 = "name" | "age" | "objCase" | "a" | "b" | "c";

type Case2 = {
  name: string;
  age: number;
}
type DeepKeysCase2 = "name" | "age";

type cases = [
  Expect<Equal<DeepKeys<Case1>, DeepKeysCase1>>,
  Expect<Equal<DeepKeys<Case2>, DeepKeysCase2>>,
];
