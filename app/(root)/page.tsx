import { EnterpriseCard } from "@/components";

const Home = () => {
    return (
        <div>
            <EnterpriseCard
            id={1}
            name="Кафе - пекарня «Франик»"
            address="площа Свободи, 8, Харків"
            collectedAmount={26700}
            targetAmount={30000}
            progressPercent={(26700 / 30000) * 100}
            description="В ніч на 31 грудня по закладу «Франик» на майдані Свободи влучив російський безпілотник. Плануємо відновлення."
            imageBefore="./1.jpg"
            imageAfter="./1_1.jpg"
            />
            <EnterpriseCard
            id={2}
            name="Ресторан «Смакота»"
            address="вул. Сумська, 12, Харків"
            collectedAmount={15000}
            targetAmount={20000}
            progressPercent={(15000 / 20000) * 100}
            description="Ресторан постраждав від обстрілу. Збираємо кошти на ремонт."
            imageBefore="./2.png"
            imageAfter="./2_1.png"
            />
            <EnterpriseCard
            id={3}
            name="Магазин «Традиції»"
            address="проспект Науки, 45, Харків"
            collectedAmount={8000}
            targetAmount={10000}
            progressPercent={(8000 / 10000) * 100}
            description="Магазин зазнав пошкоджень через вибух. Потрібна допомога для відновлення."
            imageBefore="./3.png"
            imageAfter="./3_1.png"
            />
            <EnterpriseCard
            id={4}
            name="Кондитерська «Солодкий рай»"
            address="вул. Полтавський шлях, 23, Харків"
            collectedAmount={12000}
            targetAmount={15000}
            progressPercent={(12000 / 15000) * 100}
            description="Кондитерська постраждала від пожежі після обстрілу. Збираємо кошти на відновлення."
            imageBefore="./4.png"
            imageAfter="./4_1.png"
            />
            <EnterpriseCard
            id={5}
            name="Кав'ярня «Затишок»"
            address="вул. Мироносицька, 10, Харків"
            collectedAmount={5000}
            targetAmount={7000}
            progressPercent={(5000 / 7000) * 100}
            description="Кав'ярня постраждала від вибухової хвилі. Потрібна допомога для ремонту."
            imageBefore="./5.jpg"
            imageAfter="./5_1.jpg"
            />
            <EnterpriseCard
            id={6}
            name="Салон краси «Гармонія»"
            address="вул. Пушкінська, 15, Харків"
            collectedAmount={10000}
            targetAmount={12000}
            progressPercent={(10000 / 12000) * 100}
            description="Салон краси зазнав пошкоджень через обстріл. Збираємо кошти на відновлення."
            imageBefore="./6.jpg"
            imageAfter="./6_1.jpg"
            />
            <EnterpriseCard
            id={7}
            name="Аптека «Здоров'я»"
            address="вул. Гоголя, 5, Харків"
            collectedAmount={3000}
            targetAmount={5000}
            progressPercent={(3000 / 5000) * 100}
            description="Аптека постраждала від удару. Потрібна допомога для відновлення роботи."
            imageBefore="./7.jpg"
            imageAfter="./7_1.jpg"
            />
            <EnterpriseCard
            id={8}
            name="Книжковий магазин «Читай»"
            address="вул. Шевченка, 20, Харків"
            collectedAmount={7000}
            targetAmount={9000}
            progressPercent={(7000 / 9000) * 100}
            description="Магазин постраждав від пожежі. Збираємо кошти на ремонт."
            imageBefore="./8.jpg"
            imageAfter="./8_1.jpg"
            />
        </div>
    );
};

export default Home;