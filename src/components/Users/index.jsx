import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const UsersComponent = () => {
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
