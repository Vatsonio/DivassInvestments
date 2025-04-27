"use client";

import React from "react";
import { RangeSlider, CheckboxFiltersGroup } from "@/components";
import { Input } from "@/components/ui/input";

interface Props {
    className?: string;
}

const items = [
    { text: "Tomato", value: "1" },
    { text: "Cheese", value: "2" },
    { text: "Pepperoni", value: "3" },
    { text: "Mushrooms", value: "4" },
    { text: "Olives", value: "5" },
    { text: "Pineapple", value: "6" },
    { text: "Spinach", value: "7" },
];

export const Filter: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <h1 className="font-normal text-lg text-neutral-500 mb-5">Фільтр</h1>

            {/* Filter checkboxes top */}

            <CheckboxFiltersGroup
                name="businessesTypes"
                className="mb-5"
                title="Вид бізнесу"
                items={[
                    { text: "Малий", value: "1" },
                    { text: "Середній", value: "2" },
                    { text: "Великий", value: "3" },
                ]}
            />

            {/* Filter price range */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ціна інвестиційна</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0.0} max={100.0} value={String(30)} />
                    <Input type="number" placeholder="100" min={10.0} max={50.0} />
                </div>

                <RangeSlider min={0.0} max={50.0} step={0.2} />
            </div>
        </div>
    );
};
