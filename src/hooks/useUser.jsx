import { useRouter } from "next/router";
import useSWRImmutble from "swr/immutable";

export const useUser = () => {
	const router = useRouter();
	const { data, error } = useSWRImmutble(
		router.query.id
			? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
			: null
	);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};
