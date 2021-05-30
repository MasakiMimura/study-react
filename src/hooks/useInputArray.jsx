import { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState("");
	const [array, setArray] = useState([]);

	const handleChange = (e) => {
		if (e.target.value.length > 5) {
			alert("5文字以内にしてください");
			return;
		}
		setText(e.target.value.trim());
	};

	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			if (prevArray.includes(text)) {
				alert("同じ要素が既に存在します。");
				return prevArray;
			}
			return [...prevArray, text];
		});
	}, [text]);

	return { text, array, handleChange, handleAdd };
};
