export const dateFormat = (date: string) => {
	const list = date.split('/');
	return `${list[0]}.${list[1]}.${list[2]}`;
};
