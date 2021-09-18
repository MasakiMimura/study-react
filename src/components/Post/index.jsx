import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostsId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
	const router = useRouter();
	const { data, error, isLoading } = usePost(router.query.id);

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
			<UserByUserId id={data.userId} />

			<h1 className="text-3xl font-bold">{data?.title}</h1>
			<p className="text-xl text-gray-900 mt-2">{data?.body}</p>

			<h2 className="text-lg font-bold mt-10">コメント一覧</h2>
			<CommentsByPostsId id={data.id} />
		</div>
	);
};
