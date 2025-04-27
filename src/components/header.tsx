import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "@/components/search-input";
import { ProfileButton } from "./profile-button";

export const Header = () => {
    return (
        <header className="border-b">
            <div className="container mx-auto max-w-[1280px] flex items-center justify-between py-8">
                <Link href={"/"}>
                    <div className="flex items-center gap-4">
                        <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
                        <div>
                            <h1 className="text-2xl uppercase font-black">DivassInvestments</h1>
                            <p className="text-sm text-gray-400 leading-3">
                                Проінвестуйте в своє майбутнє
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>

                <div className="flex items-center gap-3">
                    <ProfileButton />
                </div>
            </div>
        </header>
    );
};
