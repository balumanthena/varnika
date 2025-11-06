"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-[#faf6ef] pt-32 pb-28">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container-soft text-center mb-16"
        >
          <h1 className="font-[var(--font-display)] text-5xl md:text-6xl text-[#1a1a1a]">
            Book Your Appointment
          </h1>
          <p className="text-[#6a6256] mt-4 max-w-2xl mx-auto leading-relaxed">
            A private couture experience tailored for your special moment.
          </p>
        </motion.div>

        {/* Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-soft max-w-3xl bg-gradient-to-br from-white to-[#f3ede1] rounded-3xl 
          shadow-[0_25px_80px_-10px_rgba(0,0,0,0.18)] border border-champagne/40 p-12"
        >
          <form className="space-y-8">

            {/* Name */}
            <div className="group">
              <label className="text-sm text-[#6a6256] block mb-2">Full Name</label>
              <input
                className="w-full rounded-xl2 bg-white/60 border border-champagne/40 px-4 py-3
                focus:border-[#c8a34e] focus:ring-2 focus:ring-[#c8a34e]/40 outline-none
                transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone + Date */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-sm text-[#6a6256] block mb-2">Phone</label>
                <input
                  className="w-full rounded-xl2 bg-white/60 border border-champagne/40 px-4 py-3
                  focus:border-[#c8a34e] focus:ring-2 focus:ring-[#c8a34e]/40 outline-none
                  transition-all"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="group">
                <label className="text-sm text-[#6a6256] block mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full rounded-xl2 bg-white/60 border border-champagne/40 px-4 py-3
                  focus:border-[#c8a34e] focus:ring-2 focus:ring-[#c8a34e]/40 outline-none
                  transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-[#6a6256] block mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-xl2 bg-white/60 border border-champagne/40 px-4 py-3
                focus:border-[#c8a34e] focus:ring-2 focus:ring-[#c8a34e]/40 outline-none
                transition-all resize-none"
                placeholder="Tell us about your event, outfit preference, etc."
              />
            </div>

            {/* Gold Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn-gold-live px-12 py-4 text-sm tracking-[0.28em]"
              >
                Send Request
              </button>
            </div>
          </form>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
