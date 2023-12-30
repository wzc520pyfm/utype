import type { DeepReadonly } from "@utype-ts/core";
import { Equal, Expect } from "@utype-ts/shared";

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
type DeepReadonlyCase1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "string";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
};

type Case2 = { a: string } | { b: number };
type DeepReadonlyCase2 = { readonly a: string } | { readonly b: number };

type cases = [
  Expect<Equal<DeepReadonly<Case1>, DeepReadonlyCase1>>,
  Expect<Equal<DeepReadonly<Case2>, DeepReadonlyCase2>>
];
