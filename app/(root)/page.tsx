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
        </div>
    );
};

export default Home;