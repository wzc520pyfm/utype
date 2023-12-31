import type { DeepPartial } from "@utype/core";
import { Equal, Expect } from "@utype/shared";

type Case1 = {
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
type DeepPartialCase1 = {
  a?: () => 22;
  b?: string;
  c?: {
    d?: boolean;
    e?: {
      g?: {
        h?: {
          i?: true;
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

type Case2 = { a: string } | { b: number };
type DeepPartialCase2 = { a?: string } | { b?: number };

type cases = [
  Expect<Equal<DeepPartial<Case1>, DeepPartialCase1>>,
  Expect<Equal<DeepPartial<Case2>, DeepPartialCase2>>
];
