import { Outlet } from "@remix-run/react";

export default function RootLayout() {
    return (
        <div className="m-3">
            <h2 className="text-2xl font-bold">Issues</h2>
            <Outlet />
        </div>
    )
}