import Head from "next/head";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Headline page="about" />
				<Links />
			</main>

			<Footer />
		</div>
	);
}
