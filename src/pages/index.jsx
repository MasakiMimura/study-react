import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<Main page="index" />
			<Footer />
		</div>
	);
}
