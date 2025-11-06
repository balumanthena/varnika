"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bridal Couture",
    desc: "Bespoke bridal lehengas, reception gowns & timeless trousseau selections.",
    letter: "B",
  },
  {
    title: "Designer Sarees",
    desc: "Curated Kanjivaram, Banarasi, Organza & luxury handloom collections.",
    letter: "S",
  },
  {
    title: "Custom Tailoring",
    desc: "Signature blouse cuts, couture silhouettes & precision fittings.",
    letter: "T",
  },
  {
    title: "Styling & Trials",
    desc: "Jewelry pairing, draping artistry & private fitting lounge.",
    letter: "L",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="pt-36 pb-28 bg-[#faf6ef]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container-soft text-center mb-16"
        >
          <h1 className="font-[var(--font-display)] text-5xl text-[#1a1a1a] tracking-tight">
            Our Services
          </h1>
          <p className="text-[#6a6256] max-w-xl mx-auto mt-3 leading-relaxed">
            From heirloom drapes to bespoke couture — elegance crafted just for you.
          </p>
        </motion.div>

        {/* Service Cards */}
        <section className="container-soft grid md:grid-cols-2 gap-10">
          {services.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl p-10 bg-gradient-to-br from-white to-[#f4ecdf]
              border border-champagne/40 shadow-[0_12px_38px_-12px_rgba(0,0,0,0.18)]
              transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.28)] hover:-translate-y-1"
            >
              {/* GOLD HOVER GLOW */}
              <span
                className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100
                bg-[linear-gradient(120deg,#c8a34e,#f9e7b5,#b78b3f)]
                bg-[length:300%_300%] animate-goldFlow pointer-events-none
                [mask-composite:exclude;-webkit-mask-composite:xor]
                mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)"
              />

              <div className="flex items-center gap-6 relative">
                
                {/* GOLD EMBOSSED LETTER */}
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d7b873] to-[#b48a41]
                  text-white font-[var(--font-display)] text-3xl flex items-center justify-center
                  shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),0_4px_18px_rgba(0,0,0,0.15)]
                  group-hover:scale-105 transition-transform"
                >
                  {s.letter}
                </div>

                <div>
                  <h3 className="font-[var(--font-display)] text-2xl text-[#1a1a1a]">
                    {s.title}
                  </h3>
                  <p className="text-[#6a6256] mt-2 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="btn-gold-live px-10 py-4 text-sm tracking-[0.28em]"
          >
            Book a Consultation
          </a>
        </div>

      </main>

      <Footer />
    </>
  );
}
