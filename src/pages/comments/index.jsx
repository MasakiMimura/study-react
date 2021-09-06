import Head from "next/head";
import { CommentComponent } from "src/components/Comments";
import { Header } from "src/components/Header";

const Comments = () => {
	return (
		<div>
			<Head>
				<title>Comments Page</title>
			</Head>
			<Header />
			<CommentComponent />
		</div>
	);
};

export default Comments;
