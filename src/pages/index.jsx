import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState("");
	const [isShow, setIsShow] = useState(true);
	const [array, setArray] = useState([]);

	const handleClick = useCallback(() => {
		console.log(count);
		if (count < 10) {
			setCount((prevCount) => prevCount + 1);
		}
	}, [count]);

	const handleDisplay = useCallback(() => {
		setIsShow((prevIsShow) => !prevIsShow);
	}, []);

	const handleChange = (e) => {
		if (e.target.value.length > 5) {
			alert("5文字以内にしてください");
			return;
		}
		setText(e.target.value.trim());
	};

	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			if (prevArray.some((item) => item === text)) {
				alert("同じ要素が既に存在します。");
				return prevArray;
			}
			return [...prevArray, text];
		});
	}, [text]);

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
			{isShow ? <h1>{count}</h1> : null}
			<button onClick={handleClick}>ボタン</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Main page="index" />
			<Footer />
		</div>
	);
}
