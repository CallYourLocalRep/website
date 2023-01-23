import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
	slug: string;
	title: string;
	content: string;
};

export const loader: LoaderFunction = async ({
	params,
}): Promise<LoaderData> => {
	const slug = params.issue ?? "nullIssue";
	const title = slug;
	const content = "Lorem ipsum dolor sit amet";
	return { slug, title, content };
};

export default function Issue() {
	const data = useLoaderData<LoaderData>();

	return (
		<>
			<h3 className="text-xl p-3">{data.title}</h3>
			<p>A very pressing issue</p>
		</>
	);
}
