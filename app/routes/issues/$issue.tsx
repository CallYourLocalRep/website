import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
    const slug = params.issue;
}

export default function Issue() {

    return (
        <p>A very pressing issue</p>
    )
}