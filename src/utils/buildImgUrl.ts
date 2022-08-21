export function buildImgUrl(ref: string, projectId?: string, dataset?: string) {
	const url = `https://cdn.sanity.io/images/${projectId || 'xlshn1tj'}/${
		dataset || 'production'
	}/${ref}`;

	return url;
}
