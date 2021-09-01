import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
			</Head>
			<Header />
			<PostsComponent />
		</div>
	);
};

export default Posts;
