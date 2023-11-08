import { EMOJI_REGEXP, URL_REGEXP } from '@shared/consts/regexps';

export default function parseString(str: string): string[] {
	const matches = findEntries(str, new RegExp(EMOJI_REGEXP + '|' + URL_REGEXP, 'g'));
	const sliced = sliceStringByIndexes(matches, str);
	return sliced;
}

function findEntries(str: string, pattern: RegExp) {
	const indexes = [0];
	let match;
	while ((match = pattern.exec(str)) !== null) {
		indexes.push(match.index, match.index + match[0].length);
	}
	return indexes;
}

function sliceStringByIndexes(indexes: number[], text: string) {
	const slices = [];
	for (let i = 0; i < indexes.length; i++) {
		const start = indexes[i];
		const end = i < indexes.length - 1 ? indexes[i + 1] : text.length;
		const substr = text.substring(start, end);
		if (substr.length === 0) continue;
		slices.push(substr);
	}
	return slices;
}