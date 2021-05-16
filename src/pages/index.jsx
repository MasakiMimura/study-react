import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);

	const handleClick = (e) => {
		setCount((count) => count + 1);
		setCount((count) => count + 1);
	};

	useEffect(() => {
		document.body.style.backgroundColor = "lightblue";
		return () => {
			document.body.style.backgroundColor = "";
		};
	}, []);

	return (
		<div className={styles.container}>
			<Header />
			<h1>{count}</h1>
			<button onClick={handleClick}>ボタン</button>
			<Main page="index" />
			<Footer />
		</div>
	);
}
