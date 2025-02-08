"use client";

import { useEffect, useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import Head from "next/head";
import { Button } from "flowbite-react";
import "flowbite";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // فتح المودال تلقائيًا عند تحميل الصفحة (يمكنك إزالته إذا لم يكن ضروريًا)
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <Head>
        <title>Tailwind CSS + Next.js</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        {/* زر فتح المودال */}
        <div className="flex justify-center m-5">
          <button
            id="successButton"
            onClick={() => setIsModalOpen(true)}
            className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="button"
          >
            Show success message
          </button>
        </div>

        {/* المودال */}
        {isModalOpen && (
          <div
            id="successModal"
            tabIndex="-1"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md">
              {/* محتوى المودال */}
              <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* زر الإغلاق */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>

                {/* أيقونة النجاح */}
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Success</span>
                </div>

                {/* رسالة النجاح */}
                <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  Successfully removed product.
                </p>

                {/* زر المتابعة */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* زر تفعيل الوضع المظلم */}
        <DarkThemeToggle />
      </div>
    </>
  );
}
