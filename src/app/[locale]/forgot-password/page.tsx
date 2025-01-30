"use client";
import Header from "@/src/components/Header/header";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const ForgotPassword = () => {
  const t = useTranslations("login");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your actual password recovery logic
    setMessage(t("resetPasswordMessage", { email }));
  };

  return (
    <main className="flex w-full bg-gray-200 flex-col items-center min-h-screen">
      {/* Header */}
      <Header />

      <section className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-32 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {t("forgotPasswordTitle")}
        </h2>
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {t("resetPasswordButton")}
          </button>
        </form>
      </section>
      {/* Footer */}
    </main>
  );
};

export default ForgotPassword;
