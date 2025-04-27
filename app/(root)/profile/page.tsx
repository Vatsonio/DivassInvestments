import HistorySection from "@/components/history-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Phone, Mail, SquarePen } from "lucide-react";

const ProfilePage = () => {
    return (
        <div className="mx-auto max-w-5xl mt-10 px-6 m-4">
            <h1 className="font-bold text-3xl mb-8">Персональна інформація</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ім'я */}
                <div className="relative w-full">
                    <Label htmlFor="name" className="mb-2 block font-semibold">
                        Full Name
                    </Label>
                    <User className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="name"
                        type="text"
                        placeholder="Devid Jhon"
                        className="pl-12 border border-gray-300 bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Телефон */}
                <div className="relative w-full">
                    <Label htmlFor="phone" className="mb-2 block font-semibold">
                        Phone Number
                    </Label>
                    <Phone className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="phone"
                        type="text"
                        placeholder="+380 99 999 99 99"
                        className="pl-12 border border-gray-300 bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Електронна пошта */}
                <div className="relative w-full md:col-span-2">
                    <Label htmlFor="email" className="mb-2 block font-semibold">
                        Email Address
                    </Label>
                    <Mail className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="devidjhon45@gmail.com"
                        className="pl-12 border border-gray-300 bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Юзернейм */}
                <div className="relative w-full md:col-span-2">
                    <Label htmlFor="username" className="mb-2 block font-semibold">
                        Username
                    </Label>
                    <User className="absolute left-4 top-7 text-gray-400" />
                    <Input
                        id="username"
                        type="text"
                        placeholder="devidjhon24"
                        className="pl-12 border border-gray-300 bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-300"
                    />
                </div>

                {/* Опис */}
                <div className="relative w-full md:col-span-2">
                    <Label htmlFor="bio" className="mb-2 block font-semibold">
                        About You
                    </Label>
                    <SquarePen className="absolute left-4 top-7 text-gray-400" />
                    <Textarea
                        id="bio"
                        placeholder="Tell us about yourself..."
                        className="pl-12 border border-gray-300 bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-300 min-h-[200px]"
                    />
                </div>
            </div>
            <div className="mx-auto flex justify-end gap-4 mt-8">
                <button className="text-gray-600 text-lg font-medium py-2 px-4 hover:bg-gray-100 rounded-md transition">
                    Cancel
                </button>
                <button className="bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition">
                    Save Changes
                </button>
            </div>
            <hr className="border-b border-gray-300 my-8" />

            {/* Історія */}
            <HistorySection />
        </div>
    );
};

export default ProfilePage;
