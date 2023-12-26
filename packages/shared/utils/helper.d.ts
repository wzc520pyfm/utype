
export type ObjectWrapper<T> = { [P in keyof T]: T[P]; }
