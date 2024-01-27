import { Keys } from "@utype/shared";

/**
 * Subtract
 * @description From T remove properties that exist in U.
 * @example
 *  type Prop = { name: string; age: number; visible: boolean }
 *  type DefaultProps = { age: number; sex: string }
 *  // Expect: { name: string; visible: boolean }
 *  type SubtractProp = Subtract<Prop, DefaultProps>
 */
export type Subtract<T, U> = Pick<T, Exclude<Keys<T>, Keys<U>>>;
