import Head from "next/head";
import { UsersComponent } from "src/components/Users";
import { Header } from "src/components/Header";

import useSWR from "swr";

const Users = () => {
	return (
		<div>
			<Head>
				<title>Users Page</title>
			</Head>
			<Header />
			<UsersComponent />
		</div>
	);
};

export default Users;
