import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => ([{ rel: "stylesheet", href: styles }]);

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

function Navbar() {
	return (
		<nav className="flex flex-row p-3 border border-gray-700">
			<div className="mx-3 align-center p3 font-bold">Call Your Representative</div>
			<div className="mx-3 p-3 border-gray-700 border">Link</div>
			<div className="mx-3 p-3 border-gray-700 border">Link</div>
			<div className="mx-3 p-3 border-gray-700 border">Link</div>
			<div className="mx-3 p-3 border-gray-700 border">Link</div>
		</nav>
	)
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Navbar />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
