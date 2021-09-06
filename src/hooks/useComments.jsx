import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComments = () => {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/Comments",
		fetcher
	);
	console.log(data);

	return {
		data,
		error,
		isLoading: !data && !error,
		isEmpty: data && data.length === 0,
	};
};
