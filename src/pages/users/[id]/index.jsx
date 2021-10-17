import { Header } from "src/components/Header";
import { UserComponent } from "src/components/User";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
	const { id } = ctx.query;
	// ユーザー情報の取得
	const USER_API_URL = `${API_URL}/users/${id}`;
	const user = await fetch(USER_API_URL);
	const userData = await user.json();
	// ユーザーの投稿の取得
	const POSTS_API_URL = `${API_URL}/users/${userData.id}/posts`;
	const posts = await fetch(POSTS_API_URL);
	const postsData = await posts.json();

	return {
		props: {
			fallback: { [USER_API_URL]: userData, [POSTS_API_URL]: postsData },
		},
	};
};

const UsersId = (props) => {
	const { fallback } = props;
	return (
		<SWRConfig value={{ fallback }}>
			<Header />
			<UserComponent />
		</SWRConfig>
	);
};

export default UsersId;
