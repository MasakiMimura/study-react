import Head from "next/head";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Headline page="index" />
				<Links />
			</main>

			<Footer />
		</div>
	);
}
