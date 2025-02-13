export const getCourseDuration = (duration) => {
	const hours = Math.floor(duration / 60);
	const minutes = duration % 60;
	const formattedHours = String(hours).padStart(2, '0');
	const formattedMinutes = String(minutes).padStart(2, '0');
	const stringEnding = formattedHours === '01' ? 'hour' : 'hours';

	return `${formattedHours}:${formattedMinutes} ${stringEnding}`;
};
