"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
    onClickSignIn?: () => void;
    className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickSignIn }) => {
    const { data: session } = useSession();
    return (
        <div className={className}>
            {session ? (
                <Button
                    onClick={onClickSignIn}
                    variant="outline"
                    className="flex items-center gap-1"
                >
                    <User size={16} />
                    Login
                </Button>
            ) : (
                <Link href="/profile">
                    <Button variant="secondary" className="flex items-center gap-2" size={"lg"}>
                        <CircleUser size={18} />
                        Profile
                    </Button>
                </Link>
            )}
        </div>
    );
};
