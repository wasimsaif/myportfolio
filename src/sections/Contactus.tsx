import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsLoading(true); // Show loader

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.error("Error sending message", error);
        setNotification({
          type: "error",
          message: "Something went wrong. Please try again!",
        });
      })
      .finally(() => {
        setIsLoading(false); // Hide loader

        // Auto hide notification after 2 seconds
        setTimeout(() => {
          setNotification(null);
        }, 2000);
      });
  };

  return (
    <div id="contact" className="relative">
      {/* Overlay Loader */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Popup Notification */}
      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-4 py-3 rounded shadow-lg text-white transition-all duration-300 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
        <div className="flex flex-col md:flex-row max-w-6xl w-full gap-12">
          {/* Left Side - Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Share your thoughts"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-gray-500 py-2 px-1 focus:outline-none focus:border-blue-500 resize-none"
              rows={4}
              required
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 border text-sm font-semibold border-white relative z-10 overflow-hidden hover:text-white transition duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 blur-md opacity-70 animate-pulse z-0" />
              <span className="relative z-10">SHARE YOUR FEEDBACK</span>
            </button>
          </form>

          {/* Right Side - Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Contact</span>{" "}
              <span className="text-blue-400">Us</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              It is very important for us to keep in touch with you, so we are
              always ready to answer any question that interests you. Shoot!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
