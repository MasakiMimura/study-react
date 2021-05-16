import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);

	const handleClick = useCallback(() => {
		console.log(count);
		if (count < 10) {
			setCount((count) => count + 1);
		}
	}, [count]);

	useEffect(() => {
		console.log(`マウント時: ${count}`);
		document.body.style.backgroundColor = "lightblue";
		return () => {
			console.log(`アンマウント時: ${count}`);
		};
	}, [count]);

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
