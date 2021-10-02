import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import useSWRImmutble from "swr/immutable";

export const useUser = () => {
	const router = useRouter();
	const { data, error } = useSWRImmutble(
		router.query.id
			? `${API_URL}/users/${router.query.id}`
			: null
	);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};
