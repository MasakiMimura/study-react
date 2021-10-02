import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = (id) => {
	const { data, error } = useSWR(id ? `${API_URL}/posts/${id}` : null, fetcher);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};
