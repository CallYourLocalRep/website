import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import issues from 'data/issues.json';

type Issue = {
	id: number;
	slug: string;
	title: string;
	description: string;
	callTemplate: string;
}

const findIssueById = (id: number): Issue => {
	const issue = issues.filter(issue => issue.id === id)[0];
	return {
		id, slug: issue.slug, title: issue.title, description: issue.description, callTemplate: issue.callTemplate
	}
}

export const loader: LoaderFunction = async ({
	params,
}): Promise<Issue> => {
	if(!params.issue) throw new TypeError();
	const issueNumber = Number.parseInt(params.issue);
	return findIssueById(issueNumber);
};

export default function Issue() {
	const data = useLoaderData<Issue>();

	return (
		<>
			<h3 className="text-xl py-3">{ data.title }</h3>
			<p>{ data.description }</p>
			<p className="bg-blue-100 p-3 my-3"> { data.callTemplate } </p>
		</>
	);
}
