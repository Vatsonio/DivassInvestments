import { EnterpriseCard } from "@/components";

const Home = () => {
    return (
        <div>
            <EnterpriseCard
                name="Кафе - пекарня «Франик»"
                address="площа Свободи, 8, Харків"
                collectedAmount={26700}
                targetAmount={30000}
                progressPercent={(26700 / 30000) * 100}
                description="В ніч на 31 грудня по закладу «Франик» на майдані Свободи влучив російський безпілотник. Плануємо відновлення."
                imageBefore="./before.jpg"
                imageAfter="./after.jpg"
            />
        </div>
    );
};

export default Home;
