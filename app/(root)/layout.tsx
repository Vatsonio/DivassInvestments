import { Header, Footer } from "@/components";
import {  } from "@/components";
import { ReactNode, Suspense } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen flex flex-col">
            <Suspense>
                <Header />
            </Suspense>
            <div className="flex-grow">{children}</div>
            <Suspense>
                <Footer />
            </Suspense>
        </main>
    );
};

export default Layout;
