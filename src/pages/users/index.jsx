import Head from "next/head";
import Link from "next/link";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useUsers = () => {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/users",
		fetcher
	);
	console.log(data);

	return {
		data,
		error,
		isLoading: !data && !error,
		isEmpty: data && data.length === 0,
	};
};

const UserComponent = () => {
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
		<ol>
			{data.map((user) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{`${user.name}} {${user.email}}`}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};

const Users = () => {
	return (
		<div>
			<Head>
				<title>Users Page</title>
			</Head>
			<Header />
			<UserComponent />
		</div>
	);
};

export default Users;
