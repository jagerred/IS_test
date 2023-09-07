export const getStringFromDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString('ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		timeZone: 'UTC',
	});
};
