import Head from "next/head";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
};

export default MyApp;
