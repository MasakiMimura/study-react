import { useRouter } from "next/router";
import { PostListByUserId } from "src/components/Post/PostListByUserId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const UserDetail = () => {
	const router = useRouter();
	const { data, error, isLoading } = useFetch(
		router.query.id ? `${API_URL}/users/${router.query.id}` : null
	);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error.messsage}</p>;
	}

	return (
		<div>
			<h1 className="font-bold text-3xl">{data.name}</h1>
			<h2 className="text-xl font-bold mt-10">詳細</h2>
			<ul className="list-inside list-disc mt-2 text-xl">
				<li>アカウント名: {data.email}</li>
				<li>メール: {data.username}</li>
				<li>電話番号: {data.address.city}</li>
				<li>Webサイト: {data.phone}</li>
				<li>住所: {data.website}</li>
				<li>勤務先: {data.company.name}</li>
			</ul>
			<h2 className="text-xl font-bold mt-10">投稿</h2>
			<PostListByUserId id={data.id} />
		</div>
	);
};
