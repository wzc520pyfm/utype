import { MergeLeft } from "@utype/core";
import { Keys } from "@utype/shared";

/**
 * Diff
 * @description Get the types that are not common in both T and U.
 * @example
 * ```ts
 *  type Prop = { name: string; age: number; visible: boolean }
 *  type DefaultProps = { age: number; sex: string }
 *  // Expect: { name: string; visible: boolean; sex: string }
 *  type DiffProp = Diff<Prop, DefaultProps>
 * ```
 */
export type Diff<T, U> = MergeLeft<Pick<T, Exclude<Keys<T>, Keys<U>>>, Pick<U, Exclude<Keys<U>, Keys<T>>>>;
