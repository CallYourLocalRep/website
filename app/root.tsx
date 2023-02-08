import type { LinksFunction, MetaFunction } from "@remix-run/node";
import type { ReactNode } from "react";
import styles from "./styles/app.css";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Call Your Representative",
	viewport: "width=device-width,initial-scale=1",
});

function NavbarElement({ children, href }: { children: ReactNode, href?: string }) {
	return (
		<a href={href ?? "#"}>
			<div className="mx-3 p-3 border-gray-700 border">
				{children}
			</div>
		</a>
	);
}

function Navbar() {
	return (
		<div className="flex flex-row justify-between items-center p-3 border border-gray-700">
			<div className="mx-3 p3 font-bold">Call Your Representative</div>
			<nav className="flex flex-row justify-end items-center">
				<NavbarElement href={'/issues'}>Issues</NavbarElement>
			</nav>
		</div>
	);
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
				<div className="container p-3">
					<Outlet />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
