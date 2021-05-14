import classes from "./Links.module.css";

const ITEMS = [
	{
		herf: "https://nextjs.org/docs",
		title: "Documentation \u2192",
		description: "Find in-depth information about Next.js features and API.",
	},
	{
		herf: "https://nextjs.org/learn",
		title: "Learn →",
		description: "Learn about Next.js in an interactive course with quizzes!",
	},
	{
		herf: "https://github.com/vercel/next.js/tree/master/examples",
		title: "Examples →",
		description: "Discover and deploy boilerplate example Next.js projects.",
	},
	{
		herf:
			"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
		title: "Deploy →",
		description:
			"Instantly deploy your Next.js site to a public URL with Vercel.",
	},
];

export function Links() {
	return (
		<div className={classes.grid}>
			{ITEMS.map((item) => {
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
