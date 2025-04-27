import { Header, Footer } from "@/components";
import { ReactNode, Suspense } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen flex flex-col">
            <Suspense>
                <Header />
            </Suspense>

            <section className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
            >
                <source src="./public/Media/BG3.mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full text-white text-center px-4 md:px-16 bg-black/50">
                <div className="mt-[-5%]">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg w-full md:w-3/4 text-left">
                Відбудуємо разом
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl drop-shadow-md w-full text-left">
                Інвестуйте в майбутнє України: підтримайте малий бізнес або великий проєкт, зруйнований війною. Отримуйте бонуси, відсотки або станьте частиною змін.
                </p>
                <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start mx-0 md:mx-4">
                    <button
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 text-lg"
                    >
                    Переглянути проєкти
                    </button>
                    <button
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-3 text-lg"
                    >
                    Інвестувати зараз🖤
                    </button>
                </div>
                </div>
            </div>
            </section>
            <section className="container mx-auto my-8 p-24 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Доступні інвестиції
                </h2>
                <p className="text-gray-600 text-lg">
                    Оберіть проєкти, які відповідають вашим інтересам, та зробіть свій внесок у відновлення.
                </p>
            </section>
            <section className="container mx-auto flex my-1 justify-center items-center border-0">
                <div className="">
                    <div className="flex-grow border-0">{children}</div>
                </div>
            </section>

            <Suspense>
                <Footer />
            </Suspense>
        </main>
    );
};

export default Layout;
