import Head from "next/head";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Index Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
