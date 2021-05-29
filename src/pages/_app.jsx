import Head from "next/head";
import "src/styles/globals.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

function MyApp({ Component, pageProps }) {
	const counter = useCounter();
	const inputArray = useInputArray();
	useBgColor();

	return (
		<>
			<Head>
				<title>Index Page</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} {...counter} {...inputArray} />;
		</>
	);
}

export default MyApp;
