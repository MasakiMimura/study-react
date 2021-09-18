import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostsId = (props) => {
	const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
		<ul className="space-y-4">
			{data.map((comment) => {
				return (
					<li key={comment.id} className="border-b pb-2">
						<Link href={`/comments/${comment.id}`}>
							<a className="block hover:text-blue-500">{`${comment.body}}`}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
