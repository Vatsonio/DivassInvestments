"use client";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import React from "react";

export const ProvidersWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
            <Toaster />
        </>
    );
};
