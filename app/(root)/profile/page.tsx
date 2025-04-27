import HistorySection from "@/components/history-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, Mail, SquarePen } from "lucide-react";

const ProfilePage = () => {
    return (
        <div className="mx-auto max-w-5xl mt-10 px-6 m-4">
            <h1 className="font-bold text-3xl mb-8">Особисті дані</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ім'я */}
                <div className="relative w-full">
                    <Label htmlFor="name" className="mb-2 block font-semibold">
                        Ім’я та прізвище
                    </Label>
                    <User className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="name"
                        type="text"
                        placeholder="Олег Пилипенко"
                        className="pl-12 border border-gray-300 bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Телефон */}
                <div className="relative w-full">
                    <Label htmlFor="phone" className="mb-2 block font-semibold">
                        Номер телефону
                    </Label>
                    <Phone className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="phone"
                        type="text"
                        placeholder="+380 677919903"
                        className="pl-12 border border-gray-300 bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Електронна пошта */}
                <div className="relative w-full md:col-span-1">
                    <Label htmlFor="email" className="mb-2 block font-semibold">
                        Електронна пошта
                    </Label>
                    <Mail className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="devidjhon45@gmail.com"
                        className="pl-12 border border-gray-300 bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Верифікація */}
                <div className="relative w-full md:col-span-1 min-h-[60px]">
                    <Label htmlFor="verification" className="mb-2 block font-semibold">
                        Верифікація
                    </Label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            id="verification"
                            type="text"
                            placeholder="Очікуємо підтвердження особи"
                            className="pl-12 pr-[140px] border border-gray-300 bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-300"
                        />
                        <button className="absolute top-1/2 right-0 h-full transform -translate-y-1/2 bg-black text-white font-semibold py-1 px-3 rounded-md w-[130px] cursor-pointer">
                            Дія Підпис
                        </button>
                    </div>
                </div>



                {/* Опис */}
                <div className="relative w-full md:col-span-2">
                    <Label htmlFor="bio" className="mb-2 block font-semibold">
                        Про себе
                    </Label>
                    <SquarePen className="absolute left-4 top-7 text-gray-400" />
                    <Textarea
                        id="bio"
                        placeholder="Розкажіть про себе..."
                        className="pl-12 border border-gray-300 bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-300 min-h-[200px]"
                    />
                </div>
            </div>
            <div className="mx-auto flex justify-end gap-4 mt-8">
                <button className="text-gray-600 text-lg font-medium py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md transition cursor-pointer">
                    Відмінити
                </button>
                <button className="bg-black text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-gray-600 transition cursor-pointer">
                    Зберегти
                </button>
            </div>
            <hr className="border-b border-gray-300 my-8" />

            {/* Історія */}
            <HistorySection />
        </div>
    );
};

export default ProfilePage;