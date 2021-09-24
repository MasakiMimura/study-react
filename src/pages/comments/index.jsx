import Head from "next/head";
import { CommentComponent } from "src/components/Comments";
import { Header } from "src/components/Header";
import { SWRConfig } from "swr";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getStaticProps = async () => {
	const COMMENTS_API_URL = `https://jsonplaceholder.typicode.com/comments`;
	const comments = await fetch(COMMENTS_API_URL);
	const commentsData = await comments.json();
	await sleep(2000);

	return {
		props: {
			fallback: { [COMMENTS_API_URL]: commentsData },
		},
	};
};

const Comments = (props) => {
	const { fallback } = props;

	return (
		<div>
			<Head>
				<title>Comments Page</title>
			</Head>
			<SWRConfig value={{ fallback }}>
				<Header />
				<CommentComponent />
			</SWRConfig>
		</div>
	);
};

export default Comments;
