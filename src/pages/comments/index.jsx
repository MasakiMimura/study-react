import Head from "next/head";
import Link from "next/link";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

const useComments = () => {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/Comments",
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

const CommentComponent = () => {
	const { data, error, isLoading, isEmpty } = useComments();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error.messsage}</p>;
	}

	if (isEmpty) {
		return <p>No comments found</p>;
	}

	return (
		<ol>
			{data.map((comment) => {
				return (
					<li key={comment.id}>
						<Link href={`/comments/${comment.id}`}>
							<a>{`${comment.body}}`}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};

const Comments = () => {
	return (
		<div>
			<Head>
				<title>Comments Page</title>
			</Head>
			<Header />
			<CommentComponent />
		</div>
	);
};

export default Comments;
