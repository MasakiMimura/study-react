import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
	const router = useRouter();
	const bgColor = useMemo(() => {
		switch (router.pathname) {
			case "/": {
				return "lightblue";
			}
			case "/about": {
				return "beige";
			}
			default: {
				return "";
			}
		}
	}, [router.pathname]);

	// todo: 値の受け渡しが分からない
	useEffect(() => {
		// console.log(`マウント時: ${count}`);
		document.body.style.backgroundColor = bgColor;
		return () => {
			// console.log(`アンマウント時: ${count}`);
			document.body.style.backgroundColor = "";
		};
	}, [bgColor]);

	// return { count };
};
