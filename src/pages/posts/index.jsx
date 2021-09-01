import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
	return (
		<div>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<PostsComponent />
		</div>
	);
};

export default Posts;
