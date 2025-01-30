import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";

interface PageLoginProps {
  handleLogin: (email: string, password: string) => Promise<void>;
}

const PageLogin = ({ handleLogin }: PageLoginProps) => {
  const t = useTranslations("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const locale = useLocale();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      setError("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || t("loginError"));
      } else {
        setError(t("loginError"));
      }
    }
  };

  return (
    <section className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mt-32 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {t("title")}
      </h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
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

        {/* Password Input */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            {t("passwordLabel")}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          {t("loginButton")}
        </button>
      </form>

      {/* Forgot Password Link */}
      <p className="text-gray-600 mt-6 text-center">
        <a
          href={`/${locale}/forgot-password`}
          className="text-blue-600 hover:text-blue-800"
        >
          {t("forgotPasswordLink")}
        </a>
      </p>
    </section>
  );
};

export default PageLogin;
