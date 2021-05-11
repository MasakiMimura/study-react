import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Index Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main page="index" />

			<Footer />
		</div>
	);
}
