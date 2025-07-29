/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GlobeComponent from "../components/Globe";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    if (!validate()) return;

    setIsLoading(true);

    emailjs
      .sendForm("service_es2s6yg", "template_svyrplc", form.current, {
        publicKey: "wLijIDhmga-cVq0md",
      })
      .then(() => {
        setNotification({
          type: "success",
          message: "Your details have been sent successfully!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error: any) => {
        console.error("Error sending message", error);
        setNotification({
          type: "error",
          message: "Something went wrong. Please try again!",
        });
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setNotification(null);
        }, 2000);
      });
  };

  return (
    <div id="contact" className="relative">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-4 py-3 rounded shadow-lg text-white transition-all duration-300 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      <section className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contact <span className="text-blue-400">Us</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  It is very important for us to keep in touch with you...
                </p>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Share your thoughts"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none transition-colors duration-300"
                      rows={4}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="relative mt-8 px-8 py-3 border border-white text-sm font-semibold overflow-hidden hover:text-white transition duration-300 rounded group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 blur-md opacity-70 animate-pulse group-hover:opacity-90 transition-opacity duration-300" />
                  <span className="relative z-10">Click To Contact</span>
                </button>
              </form>
            </div>

            {/* Right Side - Globe */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="w-full max-w-lg aspect-square">
                <GlobeComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
