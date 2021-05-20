import { useEffect } from "react";

export const useBgLightBlue = () => {
	// todo: 値の受け渡しが分からない
	useEffect(() => {
		// console.log(`マウント時: ${count}`);
		document.body.style.backgroundColor = "lightblue";
		return () => {
			// console.log(`アンマウント時: ${count}`);
			document.body.style.backgroundColor = "";
		};
	}, []);

	// return { count };
};
