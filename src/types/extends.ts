export type IsNever<T> = [T] extends [never] ? true : false;
export type IfExtends<A, B, V> = IsNever<Extract<B, A>> extends true ? never : V;
