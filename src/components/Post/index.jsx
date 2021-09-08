import Head from "next/head";
import { CommentsByPostsId } from "src/components/Comments/CommentsByPostId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
	const { post, user, error, isLoading } = usePost();

	if (isLoading) {
		return <div>ローディング中です</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>{post?.title}</title>
			</Head>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
			{user?.name ? <div>Created by {user.name}</div> : null}
			<CommentsByPostsId id={post.id} />
		</div>
	);
};
