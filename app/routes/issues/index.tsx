import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import issues from "data/issues.json";

type Issue = {
	id: number;
	slug: string;
	title: string;
	description: string;
	callTemplate: string;
}

export const loader: LoaderFunction = async (): Promise<Issue[]> => issues;
export default function IssuesIndex() {
    const data = issues;
    console.log(data);
    return (
        <>
            <h3 className="text-xl">All Issues</h3>
            { data.map(issue => {
                <p className="">{ issue.title } </p>
            }) }
        </>
    )
}