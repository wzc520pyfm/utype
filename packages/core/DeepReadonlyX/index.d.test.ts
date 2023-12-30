import type { DeepReadonlyX } from "@utility-ts/core";
import { Equal, Expect, DeepKeys, Keys } from "@utility-ts/shared";

type Case1 = {
  a: 1;
  b: "hi";
};
type DeepReadonlyXCase1 = {
  a: 1;
  readonly b: "hi";
}

type Case2 = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};
type DeepReadonlyXCase2 = {
  x: {
    a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Case3 = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};
type DeepReadonlyXCase3 = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Case4 = {
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
type DeepReadonlyXCase4 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    readonly e: {
      g: {
        readonly h: {
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

type Case5 = {
  x: {
    a: 1;
    b: "hi";
  };
  b: "hey";
};
type DeepReadonlyXCase5 = {
  x: {
    a: 1;
    readonly b: "hi";
  };
  readonly b: "hey";
};

// todo need support
type Case6 = { a: string } | { b: number };
type DeepReadonlyXCase6 = { readonly a: string } | { readonly b: number };

type cases = [
  Expect<Equal<DeepReadonlyX<Case1, 'b'>, DeepReadonlyXCase1>>,
  Expect<Equal<DeepReadonlyX<Case2, 'b' | 'y'>, DeepReadonlyXCase2>>,
  Expect<Equal<DeepReadonlyX<Case3>, DeepReadonlyXCase3>>,
  Expect<Equal<DeepReadonlyX<Case4, 'h' | 'e'>, DeepReadonlyXCase4>>,
  Expect<Equal<DeepReadonlyX<Case5, 'b'>, DeepReadonlyXCase5>>,
  // todo need support
  // Expect<Equal<DeepReadonlyX<Case6>, DeepReadonlyXCase6>>,
];
