export default function generateId(): number {
	const base = Date.now();
	const random = +(Math.random() * 10000).toFixed();
	return base * random;
}
