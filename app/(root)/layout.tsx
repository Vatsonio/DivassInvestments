import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-1 flex-col">
            <div className="mx-auto max-w-7xl">
                <div>Header</div>
                <div className="mt-20 pb-20">{children}</div>
            </div>
        </main>
    );
};

export default Layout;
