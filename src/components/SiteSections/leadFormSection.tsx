import { useState } from "react";
import { useTranslations } from "next-intl";

const LeadFormSection = () => {
  const t = useTranslations("leadFormSection");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+55", // Default value starts with +55
    projectDescription: "",
    services: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const services = checked
        ? [...prev.services, value] // Add service if checked
        : prev.services.filter((service) => service !== value); // Remove service if unchecked
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(t("successMessage"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectDescription: "",
          services: [],
        }); // Reset form
      } else {
        setMessage(t("errorMessage"));
      }
    } catch (error) {
      setMessage(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {t("title")}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
          {t("description")}
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              {t("nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              {t("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              {t("phoneLabel")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Project Description Field */}
          <div className="mb-6">
            <label
              htmlFor="projectDescription"
              className="block text-gray-700 mb-2"
            >
              {t("projectDescriptionLabel")}
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          {/* Type of Service Checkboxes */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              {t("servicesLabel")}
            </label>
            <div className="space-y-2">
              {["cloud", "ai", "website"].map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span>{t(`services.${service}`)}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            {isSubmitting ? t("submittingText") : t("submitButton")}
          </button>

          {/* Feedback Message */}
          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeadFormSection;
