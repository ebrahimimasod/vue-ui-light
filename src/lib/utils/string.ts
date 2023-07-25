export function hasNumbers(str: string): boolean {
	return str.search(/[1-9]/) >= 0 ? true : false;
}

export function hasLowerChars(str: string): boolean {
	return str.search(/[a-z]/) >= 0 ? true : false;
}

export function hasUpperChars(str: string): boolean {
	return str.search(/[A-Z]/) >= 0 ? true : false;
}
