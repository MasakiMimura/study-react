const UserComponent = () => {
	const { data, error, isLoading } = useUser();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error.messsage}</p>;
	}

	return (
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
	);
};
