export default function isImage(str: string) {
	return /\.(jpeg|jpg|gif|png|svg|webp)$/.test(str);
}