"use client";

import PageBackground from "@/components/ui/PageBackground";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ContactInfo } from "@/types/contact";
import { useState } from "react";

type BookAppointmentPageClientProps = {
  data: ContactInfo;
};

export default function BookAppointmentPageClient({
  data,
}: BookAppointmentPageClientProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="min-h-screen overflow-x-clip text-secondary">
      <section className="relative pt-20 pb-24 md:pt-28">
        <PageBackground />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="show"
            className="grid gap-12 lg:grid-cols-12 lg:items-start"
          >
            {/* Left Content */}
            <div className="lg:col-span-6 lg:sticky lg:top-32">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d8e8df] bg-white/84 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-primary-hover shadow-[0_10px_24px_rgba(20,40,34,0.05)] backdrop-blur sm:text-[11px]">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-hover" />
                Schedule Visit
              </div>

              <h1 className="max-w-[12ch] text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.06em] text-secondary">
                Let's find time for your smile
              </h1>

              <p className="mt-8 max-w-lg text-[1rem] leading-7 text-secondary-light sm:text-[1.06rem] sm:leading-8">
                Fill out the form to request an appointment. Our team will get
                back to you shortly to confirm the exact time and date that
                works best for you.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9e8e0] bg-white text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-hover">
                      Need immediate assistance?
                    </div>
                    <a
                      href={`tel:${data.phone}`}
                      className="mt-1 block text-lg font-semibold text-secondary transition-colors hover:text-primary"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d9e8e0] bg-white text-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-hover">
                      Clinic Hours
                    </div>
                    <div className="mt-1 text-sm font-medium text-secondary-light">
                      Mon-Sat: 10:00 AM - 8:30 PM
                      <br />
                      Sun: 10:00 AM - 2:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] border border-[#dcebe3] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,250,246,0.98))] p-5 shadow-[0_24px_60px_rgba(20,40,34,0.06)] backdrop-blur sm:p-6 md:p-7">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        required
                        className="w-full rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a service...</option>
                        <option value="general">General Consultation</option>
                        <option value="cleaning">Teeth Cleaning & Scaling</option>
                        <option value="orthodontic">Orthodontic Treatment</option>
                        <option value="implant">Tooth Implants</option>
                        <option value="root_canal">Root Canal Treatment</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-[9.5px] font-bold uppercase tracking-[0.15em] text-secondary-light"
                    >
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      className="w-full resize-none rounded-[12px] border border-[#cfe3d8] bg-white px-3.5 py-2 text-sm text-secondary outline-none transition-all placeholder:text-[#a0c2af] focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Share concerns or preferred timing..."
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className="relative flex min-h-[44px] w-full items-center justify-center overflow-hidden rounded-[14px] bg-primary px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_20px_rgba(62,161,111,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-80"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : isSuccess ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Request Received
                        </span>
                      ) : (
                        "Request Appointment"
                      )}
                    </button>
                  </div>

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-center text-xs font-medium text-primary"
                    >
                      Thank you! We'll contact you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
