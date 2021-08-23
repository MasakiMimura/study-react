import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const Home = (props) => {
	const [posts, setPosts] = useState([]);

	const getPosts = useCallback(async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const json = await res.json();
		setPosts(json);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className={styles.container}>
			<Header />
			{posts.length > 0 ? (
				<ol>
					{posts.map((post) => {
						return <li key={post.id}>{post.title}</li>;
					})}
				</ol>
			) : null}
		</div>
	);
};

export default Home;
