export type NullProperties<T> = {
	[K in keyof T]: null;
};
