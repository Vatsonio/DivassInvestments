import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const BusinessPage = () => {
    return (
        <>
            <div className="flex max-w-[1280px] justify-center container mx-auto p-[40px]">
                <div className="flex flex-col gap-8 mt-10 w-full max-w-lg mx-auto">
                    {/* Картинка */}
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={"/before.jpg"} alt="Before" />}
                        itemTwo={<ReactCompareSliderImage src={"/after.jpg"} alt="After" />}
                        handle={
                            <div className="w-1 bg-black/70 h-full rounded-full cursor-ew-resize" />
                        }
                        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
                    />

                    {/* Текстовий блок */}
                    <div className="flex flex-col gap-6 bg-gray-100 rounded-xl p-6 w-full">
                        {/* Історія */}
                        <div className="flex items-start gap-6">
                            <b className="min-w-[100px] text-gray-900">Історія:</b>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                "Франик" відкрився у Харкові після початку повномасштабної війни.
                                Загалом, заклад спеціалізується на випічці: сінабони, круасани із
                                різноманітними начинками, завиток з маком, даніш.
                            </p>
                        </div>

                        {/* Власник */}
                        <div className="flex items-start gap-6">
                            <b className="min-w-[100px] text-gray-900">Власник:</b>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Олександр Чувакін
                            </p>
                        </div>

                        {/* Документи */}
                        <div className="flex items-start gap-6">
                            <b className="min-w-[100px] text-gray-900">Документи:</b>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm underline text-blue-600 cursor-pointer hover:text-blue-800">
                                    PDF файли з деталями бізнесу
                                </p>
                                <p className="text-sm underline text-blue-600 cursor-pointer hover:text-blue-800">
                                    Договір інвестування
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-auto gap-2 items-center mt-[100px]">
                    <h1 className="font-bold text-4xl">Інвестувати в проєкт</h1>
                    <div className="flex flex-col gap-2 w-full justify-center mt-3">
                        <h2 className="text-xl font-semibold text-green-600">
                            15 000 ₴{" "}
                            <span className="text-gray-500 underline text-sm">
                                (переглянути кошторис)
                            </span>
                        </h2>
                        <Progress value={(15000 / 35000) * 100} className="h-1.5 w-full" />
                        <h3 className="text-sm font-normal text-gray-500 flex justify-center">
                            Заплановано зібрати 35 000 ₴
                        </h3>
                    </div>

                    <div className="flex flex-col gap-3 w-full mt-5 px-5">
                        <Button variant={"default"} className="rounded-sm w-full py-7 px-8">
                            <Image src={"/google.png"} alt="google" width={25} height={25} />
                            <span className="text-2xl font-normal text-white">Pay</span>
                        </Button>
                        <Button variant={"default"} className="rounded-sm w-full py-7 px-8">
                            <Image src={"/apple1.png"} alt="google" width={25} height={25} />
                            <span className="text-2xl font-normal text-white">Pay</span>
                        </Button>
                        <Button variant={"default"} className="rounded-sm w-full py-7 px-8">
                            <Image src={"/mono.png"} alt="google" width={100} height={25} />
                        </Button>
                        <Button variant={"default"} className="rounded-sm w-full py-7 px-8">
                            <span className="text-2xl font-normal text-white">Pay with crypto</span>
                            <Image src={"/crypto.png"} alt="google" width={100} height={25} />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessPage;
