import Head from "next/head";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useUsers = () => {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/users",
		fetcher
	);

	return {
		data,
		error,
		loading: !data && !error,
		isEmpty: data && data.length === 0,
	};
};

const Users = () => {
	const { data, error, isLoading, isEmpty } = useUsers();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error.messsage}</p>;
	}

	if (isEmpty) {
		return <p>No users found</p>;
	}

	return (
		<div>
			<Head>
				<title>Users Page</title>
			</Head>
			<Header />
			<ol>
				{data.map((user) => {
					return (
						<li key={user.id}>
							<h2>{user.name}</h2>
							<p>{user.email}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Users;
