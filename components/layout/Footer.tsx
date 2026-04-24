"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { proceduresData } from "@/data/procedures";

type QuickLink = {
  name: string;
  path: string;
};

const quickLinks: QuickLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-[#c0d2d8] bg-accent-soft pt-16 pb-8 text-secondary">
      {/* Animated Background Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-40 right-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -left-20 top-10 h-[400px] w-[400px] rounded-full bg-white/40 blur-[100px]" />

        {/* Floating Logo Accent */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 bottom-10 h-80 w-80 opacity-[0.06] blur-[0.5px] sm:h-96 sm:w-96 md:-right-10 md:bottom-0 md:h-[450px] md:w-[450px]"
        >
          <img src="/assets/sd_teeth.png" alt="" className="h-full w-full object-contain" />
        </motion.div>

        {/* Thin Animated Circles */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 top-20 h-[400px] w-[400px] opacity-[0.15] md:-left-20 md:-top-10 md:h-[600px] md:w-[600px]"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="#03966a" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="35" stroke="#03966a" strokeWidth="0.2" />
        </motion.svg>

        <motion.svg
          animate={{ rotate: -360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-40 left-1/3 h-[300px] w-[300px] opacity-[0.2]"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeDasharray="1 6" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.3" />
        </motion.svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col">
            <Link href="/" className="mb-6 text-3xl font-bold tracking-tight text-white">
              Sarangi <span className="text-secondary">Dentistry</span>
            </Link>

            <p className="mb-6 leading-relaxed">
              Sophisticated dental procedures and treatments tailored to enhance
              your smile with natural-looking results.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-[#80c8e5] hover:text-[#022431]"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors duration-300 hover:bg-[#80c8e5] hover:text-[#022431]"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-6 text-xl font-semibold">
              Explore
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center transition-colors duration-300 hover:text-secondary-light"
                  >
                    <span className="mr-0 h-0.5 w-0 bg-secondary-light transition-all duration-300 ease-out group-hover:mr-2 group-hover:w-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-6 text-xl font-semibold">
              Procedures
            </h3>

            <ul className="space-y-4">
              {proceduresData.map((proc) => (
                <li key={proc.id}>
                  <Link
                    href={proc.path}
                    className="group flex items-center transition-colors duration-300 hover:text-secondary-light"
                  >
                    <span className="mr-0 h-0.5 w-0 bg-secondary-light transition-all duration-300 ease-out group-hover:mr-2 group-hover:w-2" />
                    {proc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-6 text-xl font-semibold ">
              Contact Us
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <svg
                  className="mr-4 mt-1 h-6 w-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="leading-relaxed">
                  Bhubaneswar, Odisha
                  <br />
                  India
                </div>
              </li>

              <li className="flex items-center">
                <svg
                  className="mr-4 h-6 w-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:info@sarangidentistry.com"
                  className="break-all transition-colors duration-300 hover:text-secondary-light"
                >
                  info@sarangidentistry.com
                </a>
              </li>

              <li className="flex items-center">
                <svg
                  className="mr-4 h-6 w-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a
                  href="tel:+919938942846"
                  className="transition-colors duration-300 hover:text-secondary-light"
                >
                  +91 9938942846
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-secondary pt-8 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sarangi Dentistry. All rights
            reserved.
          </p>

          <div className="flex space-x-6 text-sm">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-secondary-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-secondary-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
