import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "./Headline";

export function Main(props) {
	return (
		<main className={styles.main}>
			<Headline page={props.page}>
				code={<code className={styles.code}>pages/{props.page}.js</code>}
			</Headline>
			<Links />
		</main>
	);
}
