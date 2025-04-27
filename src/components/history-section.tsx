import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = [
    {
        source: {
            name: "Google",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
        visitors: "3.5K",
        revenues: "$4,500",
        sales: 250,
        conversion: "4.8%",
    },
    {
        source: {
            name: "Facebook",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        },
        visitors: "2.1K",
        revenues: "$3,200",
        sales: 190,
        conversion: "5.2%",
    },
    {
        source: {
            name: "Instagram",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        },
        visitors: "1.8K",
        revenues: "$2,800",
        sales: 160,
        conversion: "4.5%",
    },
];

const HistorySection = () => {
    return (
        <div className="mt-10">
            <h1 className="font-bold text-xl mb-4">Історія</h1>

            <div className="rounded-lg border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-5 bg-gray-50 px-6 py-4 text-gray-600 text-sm font-semibold">
                    <div>Source</div>
                    <div>Visitors</div>
                    <div>Revenues</div>
                    <div>Sales</div>
                    <div>Conversion</div>
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
                        {/* Source */}
                        <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={item.source.image} alt={item.source.name} />
                                <AvatarFallback>{item.source.name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{item.source.name}</span>
                        </div>

                        {/* Visitors */}
                        <div>{item.visitors}</div>

                        {/* Revenues */}
                        <div className="text-green-600 font-semibold">{item.revenues}</div>

                        {/* Sales */}
                        <div>{item.sales}</div>

                        {/* Conversion */}
                        <div className="text-blue-600 font-semibold">{item.conversion}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistorySection;
