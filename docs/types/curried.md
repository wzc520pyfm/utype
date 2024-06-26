---
category: Function
---

# Curried

<TypeInfo category="Function" />

[Currying](https://en.wikipedia.org/wiki/Currying) function with support for dynamic parameters.

## Usage

```ts{13-15} twoslash
import type { Curried } from '@utype/core'

// Your implementation logic...
declare function yourCurrying<A extends unknown[], R>(fn: (...args: A) => R): Curried<A, R>

const yourFun = (a: string, b: number) => true;
const curriedYourFun = yourCurrying(yourFun);

// use your curried func
const res1 = curriedYourFun('123', 123);
const res2 = curriedYourFun('123')(123);

// Expect:
//  ((a: string, b: number) => boolean) &
//  ((a: string) => (b: number) => boolean)
type CurriedYourFun = typeof curriedYourFun;
```
