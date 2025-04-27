"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateApplicationPage = () => {
  const router = useRouter();

  const [businessOwner, setBusinessOwner] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [requiredAmount, setRequiredAmount] = useState("");
  const [estimateFile, setEstimateFile] = useState(null);
  const [businessHistory, setBusinessHistory] = useState("");

  const handleFileChange = (event) => {
    setEstimateFile(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Показуємо повідомлення про успішне відправлення
    alert("Заявку успішно відправлено!");

    // Перенаправляємо на головну сторінку
    router.push("/");
  };

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="mx-auto max-w-[1280px] mt-10 pb-14">
      <h1 className="font-bold text-2xl mb-6">Створення заявки</h1>
      <p className="text-gray-600 mb-8">
        Залишіть заявку для розміщення, після чого ми підтвердимо її та розмістимо на платформі.
        <span className="float-right text-primary-500 hover:underline cursor-pointer">Правила платформи</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Власник бізнесу */}
        <div>
          <label htmlFor="businessOwner" className="block text-sm font-medium text-gray-700">
            Власник бізнесу (ФІП)
          </label>
          <input
            type="text"
            id="businessOwner"
            value={businessOwner}
            onChange={(e) => setBusinessOwner(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="ФІП"
            required
          />
        </div>

        {/* Електронна пошта */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Електронна пошта для зв'язку
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="hello@divass.io"
            required
          />
        </div>

        {/* Місто */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Місто
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Львів"
            required
          />
        </div>

        {/* Тип бізнесу */}
        <div>
          <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
            Тип бізнесу
          </label>
          <select
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            required
          >
            <option value="" disabled>Оберіть тип</option>
            <option value="small">Малий</option>
            <option value="medium">Середній</option>
            <option value="large">Великий</option>
          </select>
        </div>

        {/* Назва бізнесу */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
            Назва бізнесу
          </label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Введіть назву"
            required
          />
        </div>

        {/* Необхідна сума */}
        <div>
          <label htmlFor="requiredAmount" className="block text-sm font-medium text-gray-700">
            Необхідна сума
          </label>
          <input
            type="number"
            id="requiredAmount"
            value={requiredAmount}
            onChange={(e) => setRequiredAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Введіть суму"
            required
          />
        </div>

        {/* Кошторис */}
        <div>
          <label htmlFor="estimateFile" className="block text-sm font-medium text-gray-700">
            Кошторис
          </label>
          <div className="mt-1 flex items-center">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span>Прикріпити файл</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
            {estimateFile && <span className="ml-2 text-sm text-gray-500">{estimateFile.name}</span>}
          </div>
        </div>

        {/* Історія бізнесу */}
        <div>
          <label htmlFor="businessHistory" className="block text-sm font-medium text-gray-700">
            Історія вашого бізнесу
          </label>
          <textarea
            id="businessHistory"
            rows={4}
            value={businessHistory}
            onChange={(e) => setBusinessHistory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Розкажіть про свій бізнес"
            required
          />
        </div>

        {/* Кнопки */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 cursor-pointer"
            onClick={handleGoBack}
          >
            Назад
          </button>
          <button
            type="submit"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
          >
            Надіслати на верифікацію
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateApplicationPage;