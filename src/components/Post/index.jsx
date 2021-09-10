import Head from "next/head";
import { CommentsByPostsId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/Users/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
	const { data, error, isLoading } = usePost();

	if (isLoading) {
		return <div>ローディング中です</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>{data?.title}</title>
			</Head>
			<h1>{data?.title}</h1>
			<p>{data?.body}</p>
			<UserByUserId id={data.userId} />
			<CommentsByPostsId id={data.id} />
		</div>
	);
};
