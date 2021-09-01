import classes from "src/components/Layout/Layout.module.css";

export const Layout = (props) => {
	return <div className={classes.container}>{props.children}</div>;
};
