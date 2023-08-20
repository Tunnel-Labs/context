export function setupContextProperties<CreateArgs>(): {
	defineContextProperties<C extends (createArgs: CreateArgs) => any>(args: {
		create: C;
	}): { create: C };
} {
	return {
		defineContextProperties(args) {
			return args;
		}
	};
}

export function defineProperties<P>(properties: P): any {
	return properties;
}
