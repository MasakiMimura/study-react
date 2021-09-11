import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
	const { data, error } = useSWR(
		props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
		fetcher
	);

	if (!data && !error) {
		return <div>ローディング中です</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return <div>Created by {data.name}</div>;
};
