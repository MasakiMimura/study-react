import { useRouter } from "next/router";
import useSWR from "swr";

export const useComment = () => {
	const router = useRouter();
	const { data, error } = useSWR(
		router.query.id
			? `https://jsonplaceholder.typicode.com/Comments/${router.query.id}`
			: null
	);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};
