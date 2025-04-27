"use client";

import { cn } from "@/lib/utils";
import React from "react";

export type Category = {
    id: number;
    name: string;
};

interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
    return (
        <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-lg", className)}>
            {items.map(({ name, id }, index) => (
                <a
                    className={cn(
                        "flex items-center font-bold h-11 rounded-lg px-5",
                        1 === id && "bg-white shadow-md shadow-gray-200 text-primary",
                    )}
                    href={`/business/#${name}`}
                    key={index}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};
