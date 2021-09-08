import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useFetchArray = (url, fetcher) => {
	const { data, error } = useSWR(url, fetcher);

	return {
		data,
		error,
		isLoading: !data && !error,
		isEmpty: data && data.length === 0,
	};
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
	return useFetchArray(`${API_URL}/Comments`, fetcher);
};

export const usePosts = () => {
	return useFetchArray(`${API_URL}/Posts`, fetcher);
};

export const useUsers = () => {
	return useFetchArray(`${API_URL}/Users`, fetcher);
};

export const useCommentsByPostsId = (id) => {
	return useFetchArray(id ? `${API_URL}/Comments?postId=${id}` : null, fetcher);
};
