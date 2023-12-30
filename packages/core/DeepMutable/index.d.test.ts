import type { DeepMutable } from "@utility-ts/core";
import { Equal, Expect } from "@utility-ts/shared";

type Case1 = {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
  readonly meta: {
    readonly author: string;
  };
};
type DeepMutableCase1 = {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
};

type Case2 = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "s";
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
type DeepMutableCase2 = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "s";
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

type Case3 = { readonly a: string } | { readonly b: number };
type DeepMutableCase3 = { a: string } | { b: number };

type cases = [
  Expect<Equal<DeepMutable<Case1>, DeepMutableCase1>>,
  Expect<Equal<DeepMutable<Case2>, DeepMutableCase2>>,
  Expect<Equal<DeepMutable<Case3>, DeepMutableCase3>>
];

type errors = [
  // @ts-expect-error
  DeepMutable<"string">,
  // @ts-expect-error
  DeepMutable<0>
];
