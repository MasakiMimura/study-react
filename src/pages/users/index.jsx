import Head from "next/head";
import { UsersComponent } from "src/components/Users";
import { Header } from "src/components/Header";
import { SWRConfig } from "swr";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getServerSideProps = async () => {
	const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";
	const users = await fetch(USERS_API_URL);
	const usersData = await users.json();
	await sleep(2000);

	return {
		props: {
			fallback: { [USERS_API_URL]: usersData },
		},
	};
};

const Users = (props) => {
	const { fallback } = props;

	return (
		<div>
			<Head>
				<title>Users Page</title>
			</Head>
			<SWRConfig value={{ fallback }}>
				<Header />
				<UsersComponent />
			</SWRConfig>
		</div>
	);
};

export default Users;
