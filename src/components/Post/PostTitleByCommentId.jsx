import Link from "next/link";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const PostTitleByCommentId = (props) => {
	const { data, error, isLoading } = useFetch(
		props.id ? `${API_URL}/posts/${props.id}` : null
	);

	if (isLoading) {
		return <div>ローディング中です</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<Link href={`/posts/${data?.id}`}>
			<a className="text-lg hover:text-blue-500">{data?.title}</a>
		</Link>
	);
};
