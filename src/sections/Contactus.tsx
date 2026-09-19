/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
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
    setErrors({ ...errors, [e.target.name]: "" });
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
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_es2s6yg",
        template_id: "template_svyrplc",
        user_id: "wLijIDhmga-cVq0md",
        template_params: Object.fromEntries(new FormData(form.current)),
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to send message");
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
    <div id="contact" className="relative bg-[#050816]">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </div>
      )}

      {notification && (
        <div
          className={`fixed right-6 top-6 z-50 rounded-xl px-4 py-3 text-white shadow-lg transition-all duration-300 ${
            notification.type === "success" ? "bg-emerald-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      <section className="w-full px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(15,23,42,0.96),_rgba(17,24,39,1))] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-6 sm:p-8">
                <div className="mb-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                    Let&apos;s talk
                  </p>
                  <h2 className="text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl lg:text-5xl">
                    Contact <span className="text-indigo-400">Me</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                    I&apos;m open to product work, frontend projects, automation ideas, and collaborations that need clean thinking and modern execution.
                  </p>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(129,140,248,0.45)] transition-all duration-300 hover:-translate-y-1"
                  >
                    {isLoading ? "Sending..." : "Contact Me"}
                  </button>
                </form>
              </div>

              <div className="relative flex min-h-[520px] items-center justify-center rounded-[28px] border border-indigo-400/20 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.18),_transparent_35%),linear-gradient(160deg,_rgba(15,23,42,0.9),_rgba(2,6,23,1))] p-4 sm:p-6">
                <div className="absolute inset-x-8 top-8 flex items-center justify-between gap-3 text-white/80">
                  <div className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200 backdrop-blur-sm">
                    Available for work
                  </div>
                  <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-indigo-100 backdrop-blur-sm">
                    Worldwide
                  </div>
                </div>

                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.18),_transparent_40%)]" />
                  <div className="relative w-full max-w-[430px]">
                    <GlobeComponent />
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Email</div>
                    <div className="mt-1 text-sm font-medium text-white">wasimsaifi983@gmail.com</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Phone</div>
                    <div className="mt-1 text-sm font-medium text-white">+91 70174 99280</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
