import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useUsers = () => {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/users",
		fetcher
	);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEmpty: data && data.length === 0,
	};
};
