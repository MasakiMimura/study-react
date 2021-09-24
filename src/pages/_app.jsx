import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetcher = async (...args) => {
	const res = await fetch(...args);
	const json = res.json();
	await sleep(2000);
	return json;
};

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SWRConfig value={{ fetcher }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</>
	);
};

export default MyApp;
