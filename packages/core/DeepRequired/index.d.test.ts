import type { DeepRequired } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
  a: () => 22;
  b?: string;
  c?: {
    d: boolean;
    e?: {
      g: {
        h?: {
          i: true;
          j?: "string";
        };
        k?: "hello";
      };
      l?: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};
type DeepRequiredCase1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};

type TT = DeepRequired<Case1>

type Case2 = { a?: string } | { b?: number };
type DeepRequiredCase2 = { a: string } | { b: number };

type cases = [
  Expect<Equal<DeepRequired<Case1>, DeepRequiredCase1>>,
  Expect<Equal<DeepRequired<Case2>, DeepRequiredCase2>>
];
