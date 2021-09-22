import useSWRImmutble from "swr/immutable";

const useFetchArray = (url) => {
	const { data, error } = useSWRImmutble(url);

	return {
		data,
		error,
		isLoading: !data && !error,
		isEmpty: data && data.length === 0,
	};
};

const API_URL = "https://jsonplaceholder.typicode.com";

// posts
export const usePosts = () => {
	return useFetchArray(`${API_URL}/posts`);
};

export const usePostsByUserId = (id) => {
	return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

// users
export const useUsers = () => {
	return useFetchArray(`${API_URL}/users`);
};

// comments
export const useComments = () => {
	return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) => {
	return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
