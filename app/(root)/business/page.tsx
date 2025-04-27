"use client";

import { Categories, Filter } from "@/components";
import { ArrowUpDown } from "lucide-react";
import { Suspense } from "react";
import { EnterpriseCard } from "@/components";
import { useRouter } from "next/navigation";

const BusinessCategories = [
    { id: 1, name: "Ресторани" },
    { id: 2, name: "Кафе" },
    { id: 3, name: "Готелі" },
    { id: 4, name: "Магазини" },
    { id: 5, name: "Послуги" },
];

const AllBusinessPage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/business/1");
    };

    return (
        <>
            <div className="mx-auto max-w-[1280px] mt-10">
                <h1 className="font-bold text-2xl">Бізнеси</h1>
            </div>

            <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
                <div className="mx-auto max-w-[1280px] flex items-center justify-between">
                    <Categories items={BusinessCategories} />
                    <div className="inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer">
                        <ArrowUpDown size={16} />
                        <b>Sorting:</b>
                        <b className="text-primary">Rating</b>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-[1280px] pb-14 mt-10">
                <div className="flex flex-row gap-[80px]">
                    <div className="w-[250px] flex">
                        <Suspense>
                            <Filter />
                        </Suspense>
                    </div>
                    <div className="flex-1">
                        <EnterpriseCard
                            name="Кафе - пекарня «Франик»"
                            address="площа Свободи, 8, Харків"
                            collectedAmount={26700}
                            targetAmount={30000}
                            progressPercent={(26700 / 30000) * 100}
                            description="В ніч на 31 грудня по закладу «Франик» на майдані Свободи влучив російський безпілотник. Плануємо відновлення."
                            imageBefore="./before.jpg"
                            imageAfter="./after.jpg"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllBusinessPage;
