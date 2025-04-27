import { cn } from "@/lib/utils";

const data = [
    {
        name: "Google",
        totalCollected: "32 500 ₴",
        investmentVolume: "5 768 ₴",
        transactionId: "590321",
        conversion: "копія договору",
    },
    {
        name: "Twitter",
        totalCollected: "19 630 ₴",
        investmentVolume: "1 635 ₴",
        transactionId: "467188",
        conversion: "копія договору",
    },
    {
        name: "Github",
        totalCollected: "43 520 ₴",
        investmentVolume: "2 290 ₴",
        transactionId: "420095",
        conversion: "копія договору",
    },
    {
        name: "YouTube",
        totalCollected: "8 615 ₴",
        investmentVolume: "580 ₴",
        transactionId: "389501",
        conversion: "копія договору",
    },
    {
        name: "Facebook",
        totalCollected: "52 140 ₴",
        investmentVolume: "2 740 ₴",
        transactionId: "230469",
        conversion: "копія договору",
    },
];

const HistorySection = () => {
    return (
        <div className="mt-10">
            <h1 className="font-bold text-xl mb-4">Історія інвестицій</h1>

            <div className="rounded-lg border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-5 bg-gray-100 px-6 py-4 text-gray-600 text-sm font-semibold">
                    <div>Назва</div>
                    <div>Загально зібрано</div>
                    <div>Об'єм інвестицій</div>
                    <div>ID транзакції</div>
                    <div>Документи</div>
                </div>

                {/* Body */}
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "grid grid-cols-5 items-center px-6 py-5 text-sm",
                            index % 2 === 0 ? "bg-white" : "bg-gray-50",
                        )}
                    >
                        {/* Назва */}
                        <div className="font-medium">{item.name}</div>

                        {/* Загально зібрано */}
                        <div>{item.totalCollected}</div>

                        {/* Об'єм інвестицій */}
                        <div className="text-green-600 font-semibold">{item.investmentVolume}</div>

                        {/* ID транзакції */}
                        <div>{item.transactionId}</div>

                        {/* Conversion */}
                        <div className="text-blue-600 font-semibold">{item.conversion}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistorySection;