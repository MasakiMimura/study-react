import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const NAV_TTEMS = [
	{ href: "/", label: "Index" },
	{ href: "/about", label: "About" },
];

export const Header = () => {
	return (
		<header className={classes.header}>
			{NAV_TTEMS.map((item) => {
				return (
					<Link key={item.href} href={item.href}>
						<a className={classes.anchor}>{item.label}</a>
					</Link>
				);
			})}
		</header>
	);
};
