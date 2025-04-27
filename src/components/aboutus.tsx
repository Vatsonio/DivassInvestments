import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-5xl font-roboto-condensed font-bold text-center mb-10 max-w-4xl mx-auto">
          Ми, DivassTeam, розробляємо IT-рішення, щоб допомогти Україні в післявоєнне відновлення.
        </h2>
        <p className="text-center font-roboto-condensed text-black mb-20 text-lg max-w-3xl mx-auto">
          Наша мета — створити сприятливий інвестиційний клімат та заохочувати як звичайних людей, так і професійних інвесторів шляхом надання їм різноманітних бонусів та вигідних пропозицій.
        </p>

        {/* Main Content */}
        <div className="py-20 mb-20 w-full">
          <div className="flex flex-col gap-8">
            {/* Top: Description */}
            <div className="w-full">
              <h3 className="text-5xl text-center font-roboto-condensed font-bold mb-4">Попередній проєкт</h3>
              <p className="text-center font-roboto-condensed text-black mb-3 text-lg">
                Дізнайтесь про Divass-Help — наш попередній проєкт, який допомагає знаходити підтримку.
              </p>
            </div>

            {/* Bottom: Static Map Image */}
            <div className="w-full flex justify-center">
              <img
                src="/map-placeholder.png"
                alt="Static Map"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Text Below Image */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-10 w-full">
              {/* Left Side: Logo and Tags */}
              <div className="w-1/2">
                <h3 className="text-xl font-roboto-condensed font-bold mb-4">Divass Help Map</h3>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-200 text-black px-3 py-1 rounded-4 font-semibold text-sm">#Допомога</span>
                  <span className="bg-gray-200 text-black px-3 py-1 rounded-4 font-semibold text-sm">#Карта</span>
                  <span className="bg-gray-200 text-black px-3 py-1 rounded-4 font-semibold text-sm">#Благодійність</span>
                </div>
              </div>

              {/* Right Side: Description */}
              <div className="w-1/2">
                <p className="text-black text-s font-bald">
                Divass Help Map — це інтерактивна карта, створена для того, щоб люди могли швидко знайти найближчі місця, де надають допомогу: від притулків для тварин до благодійних організацій. Наша команда розробила цей проєкт, щоб об’єднати тих, хто потребує підтримки, з тими, хто готовий її надати, у зручному та доступному форматі. Дізнайтесь більше про Divass Help Map на GitHub і долучайтесь до ініціативи, яка змінює життя на краще!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;