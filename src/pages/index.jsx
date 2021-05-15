import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

export default function Home() {
	const foo = 1;

	const handleClick = useCallback((e) => {
		console.log(e.target);
		e.preventDefault();
		alert(foo);
	}, []);

	return (
		<div className={styles.container}>
			<Header />
			<a href="/about" onClick={handleClick}>
				ボタン
			</a>
			<Main page="index" />
			<Footer />
		</div>
	);
}
