import { Header } from "@/components";
import { ReactNode, Suspense } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen">
            <Suspense>
                <Header />
            </Suspense>
            {children}
        </main>
    );
};

export default Layout;
