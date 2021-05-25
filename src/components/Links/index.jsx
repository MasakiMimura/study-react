import classes from "src/components/Links/Links.module.css";

export function Links({ items }) {
	return (
		<div className={classes.grid}>
			{items.map((item) => {
				return (
					<a key={item.herf} href={item.herf} className={classes.card}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</a>
				);
			})}
		</div>
	);
}
