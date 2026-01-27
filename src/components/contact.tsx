import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./navbar";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // EmailJS configuration
    // Get these from environment variables or set defaults
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_portfolio";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!publicKey) {
      setSubmitStatus({
        type: "error",
        message:
          "Email service not configured. Please contact me directly at remon.rakibul.star@gmail.com",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "remon.rakibul.star@gmail.com",
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly at remon.rakibul.star@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className="min-h-screen py-20 px-4 pt-24">
        <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="rounded-2xl bg-white/80 dark:bg-white/5 p-8 backdrop-blur-lg shadow-2xl ring-1 ring-gray-300 dark:ring-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:focus:ring-teal-400/50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:focus:ring-teal-400/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:focus:ring-teal-400/50"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-white/5 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all focus:border-teal-500 dark:focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:focus:ring-teal-400/50"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`rounded-lg p-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 text-green-700 dark:text-green-300"
                    : "bg-red-500/20 text-red-700 dark:text-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-4 font-semibold text-white transition-all hover:from-teal-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-teal-500/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Or reach me directly at{" "}
              <a
                href="mailto:remon.rakibul.star@gmail.com"
                className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
              >
                remon.rakibul.star@gmail.com
              </a>
            </p>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
