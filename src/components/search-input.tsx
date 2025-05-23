"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [focused, setFocused] = React.useState(false);
    const ref = React.useRef(null);

    useClickAway(ref, () => setFocused(false));
    useDebounce(
        async () => {
            try {
            } catch (error) {
                console.log(error);
            }
        },
        250,
        [searchQuery],
    );

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery("");
    };

    return (
        <>
            {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
            <div
                ref={ref}
                className={cn(
                    "flex rounded-2xl flex-1 justify-between relative h-11 z-30 max-w-[600px]",
                    className,
                )}
            >
                <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
                <input
                    className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
                    type="text"
                    placeholder="Знайти інвестицію ..."
                    onFocus={() => setFocused(true)}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </>
    );
};
