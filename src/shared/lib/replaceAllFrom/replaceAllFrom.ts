export default function replaceAllFrom(searchValues: string[], replaceValue: string, target: string) {
	return searchValues.reduce((acc, value) => acc.replace(value, replaceValue), target); 
}