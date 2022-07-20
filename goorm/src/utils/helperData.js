export const extractData = (data) => {
	if (data.data?.collection) {
		return {
			items: data.data.collection.items,
			totalHit: data.data.collection.metadata.total_hits,
		}
	}
	return null;
}

export const sliceFormatText = (text) => {
	return text.length > 150 ? `${text.slice(0, 150)}...` : text;
}

export const sliceTitleText = (text) => {
	return text.length > 50 ? `${text.slice(0, 50)}...` : text;
}