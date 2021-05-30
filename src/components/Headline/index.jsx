import classes from "src/components/Headline/Headline.module.css";

export const Headline =(props) => {
	return (
		<div>
			<h1 className={classes.title}>{props.page} page</h1>

			<p className={classes.description}>
				アイテムの数は {props.children} 個です
			</p>
			<button onClick={props.handleReduce}>減らす</button>
		</div>
	);
}
