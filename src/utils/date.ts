const longDateFormatter = new Intl.DateTimeFormat('en-US', {
	dateStyle: 'long',
	timeZone: 'UTC',
});

export const formatLongDate = (date: Date): string => {
	return longDateFormatter.format(date);
};

export const formatShortDate = (date: Date): string => {
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');
	const year = date.getUTCFullYear();

	return `${month}-${day}-${year}`;
};