import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { SWRConfig } from "swr";

const fetcher = async (...args) => {
	const res = await fetch(...args);
	const json = res.json();
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
