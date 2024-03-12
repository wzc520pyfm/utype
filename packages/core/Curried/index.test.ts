import { Curried } from "@utype/core";
import { Expect, Equal } from "@utype/shared";

// test func
declare function DynamicParamsCurrying<A extends unknown[], R>(
  fn: (...args: A) => R
): Curried<A, R>;

const curried1 = DynamicParamsCurrying(
  (_a: string, _b: number, _c: boolean) => true
);
const curried2 = DynamicParamsCurrying(
  (
    _a: string,
    _b: number,
    _c: boolean,
    _d: boolean,
    _e: boolean,
    _f: string,
    _g: boolean
  ) => true
);

type Curried1Type = ((
  _a: string
) => ((_b: number) => (_c: boolean) => boolean) &
  ((_b: number, _c: boolean) => boolean)) &
  ((_a: string, _b: number) => (_c: boolean) => boolean) &
  ((_a: string, _b: number, _c: boolean) => boolean);

const curried1Return1 = curried1("123")(123)(true);
const curried1Return2 = curried1("123", 123)(false);
const curried1Return3 = curried1("123")(123, false);
const curried1Return4 = curried1("123", 123, true);

const curried2Return1 = curried2("123")(123)(true)(false)(true)("123")(false);
const curried2Return2 = curried2("123", 123)(true, false)(true, "123")(false);
const curried2Return3 = curried2("123", 123)(true)(false)(true, "123", false);
const curried2Return4 = curried2("123", 123, true)(false, true, "123")(false);
const curried2Return5 = curried2("123", 123, true)(false)(true)("123")(false);
const curried2Return6 = curried2("123", 123, true, false)(true, "123", false);
const curried2Return7 = curried2("123", 123, true, false, true)("123", false);
const curried2Return8 = curried2("123", 123, true, false, true)("123")(false);
const curried2Return9 = curried2("123", 123, true, false, true, "123")(false);
const curried2Return10 = curried2("123", 123, true, false, true, "123", false);

type cases = [
  // check preserves parameter names
  Expect<Equal<typeof curried1, Curried1Type>>,

  // check return type
  Expect<Equal<typeof curried1Return1, boolean>>,
  Expect<Equal<typeof curried1Return2, boolean>>,
  Expect<Equal<typeof curried1Return3, boolean>>,
  Expect<Equal<typeof curried1Return4, boolean>>,

  // check more params
  Expect<Equal<typeof curried2Return1, boolean>>,
  Expect<Equal<typeof curried2Return2, boolean>>,
  Expect<Equal<typeof curried2Return3, boolean>>,
  Expect<Equal<typeof curried2Return4, boolean>>,
  Expect<Equal<typeof curried2Return5, boolean>>,
  Expect<Equal<typeof curried2Return6, boolean>>,
  Expect<Equal<typeof curried2Return7, boolean>>,
  Expect<Equal<typeof curried2Return8, boolean>>,
  Expect<Equal<typeof curried2Return9, boolean>>,
  Expect<Equal<typeof curried2Return10, boolean>>
];
