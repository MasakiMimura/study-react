import { useRouter } from "next/router";
import { Header } from "src/components/Header";
import useSWR from "swr";

const useUser = () => {
	const router = useRouter();
	const { data, error } = useSWR(
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

const UsersId = () => {
	const { data, error, isLoading } = useUser();
	console.log(data);

	return (
		<div>
			<Header />
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>error.message</div>
			) : (
				<div>
					<h1>{data.name}</h1>
					<ul>
						<li>{data.email}</li>
						<li>{data.username}</li>
						<li>{data.address.city}</li>
						<li>{data.phone}</li>
						<li>{data.website}</li>
						<li>{data.company.name}</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default UsersId;
