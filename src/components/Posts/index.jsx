import Link from "next/link";
import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
	const { data, error, isLoading, isEmpty } = usePosts();

	if (isLoading) {
		return <div>ローディング中です</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	if (isEmpty) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{data.map((post) => {
				return (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
