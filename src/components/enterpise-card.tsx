"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface EnterpriseCardProps {
    id: number; // додано
    name: string;
    address: string;
    collectedAmount: number;
    targetAmount: number;
    progressPercent: number;
    description: string;
    imageBefore: string;
    imageAfter: string;
    className?: string;
}

export const EnterpriseCard: React.FC<EnterpriseCardProps> = ({
    id, // додано
    name,
    address,
    collectedAmount,
    targetAmount,
    progressPercent,
    description,
    imageBefore,
    imageAfter,
    className,
}) => {
    const router = useRouter(); // додано

    return (
        <div
            className={cn(
                "mx-auto flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-300",
                className,
            )}
        >
            <div className="w-full max-w-3xs md:aspect-[16/9] overflow-hidden rounded-xl">
                <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={imageBefore} alt="Before" />}
                    itemTwo={<ReactCompareSliderImage src={imageAfter} alt="After" />}
                    handle={
                        <div className="w-1 bg-black/70 h-full rounded-full cursor-ew-resize" />
                    }
                    style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                />
            </div>

            <div className="flex flex-1 flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">{name}</h2>

                    <div className="flex items-center text-gray-500 text-sm gap-1">
                        <MapPin size={14} />
                        <span>{address}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-medium">
                        <span className="text-gray-500">Зібрано:</span>
                        <span className="text-green-600">{collectedAmount.toLocaleString()}</span>/
                        <span>{targetAmount.toLocaleString()} ₴</span>
                        <span className="text-gray-400 text-xs ml-1 hover:underline cursor-pointer">
                            (переглянути кошторис)
                        </span>
                    </div>

                    <Progress value={progressPercent} className="h-1.5 w-full md:w-1/3" />

                    <p className="text-gray-700 text-sm leading-snug w-full md:w-2/3">
                        {description}
                    </p>
                </div>
            </div>

            <div className="w-full md:w-auto flex justify-end mt-0 md:mt-auto z-10">
                <Button
                    variant="default"
                    className="rounded-2xl w-full md:w-auto p-6 z-10 cursor-pointer"
                    onClick={() => router.push(`/business/${id}`)}
                >
                    Інвестувати
                </Button>
            </div>
        </div>
    );
};