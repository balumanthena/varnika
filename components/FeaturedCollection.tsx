"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const items = [
  { src: "/collection-1.jpg", title: "Kanchipattu Bridal Saree" },
  { src: "/collection-2.jpg", title: "Banarasi Heirloom Weave" },
  { src: "/collection-3.jpg", title: "Designer Bridal Lehenga", tag: "New" },
  { src: "/collection-4.jpg", title: "Pastel Silk Saree" },
  { src: "/collection-5.jpg", title: "Grand Zari Kanchee" },
];

export default function CollectionPage() {
  const [active, setActive] = useState(2);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  /* Auto-scroll */
  useEffect(() => {
    const loop = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
      scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });
    }, 3500);

    return () => clearInterval(loop);
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-28 md:pt-36 bg-[#faf6ef]">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container-soft text-center mb-14"
        >
          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl text-[#1a1a1a]">
            Signature Collection
          </h1>
          <p className="text-[#6a6256] mt-3 text-base md:text-lg max-w-xl mx-auto">
            Curated couture pieces crafted for timeless bridal elegance.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex items-center gap-4 md:gap-10 overflow-x-auto px-4 hide-scrollbar snap-x snap-mandatory select-none"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`
                relative cursor-pointer rounded-[24px] overflow-hidden snap-center
                transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  active === i
                    ? "w-[150px] h-[260px] md:w-[300px] md:h-[480px] scale-[1.05] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)]"
                    : "w-[90px] h-[190px] md:w-[180px] md:h-[340px] opacity-50 hover:opacity-90"
                }
              `}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1200ms]"
                priority={active === i}
              />

              {item.tag && (
                <span className="absolute top-3 left-3 bg-[rgba(250,246,239,0.85)] text-[#1a1a1a] text-[9px] uppercase px-2 py-[4px] rounded-full border border-[#c8a34e]">
                  {item.tag}
                </span>
              )}

              {active === i && (
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-[var(--font-display)] text-sm md:text-xl text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-14 pb-24"
        >
          <a href="/contact" className="btn-gold-live px-10 py-4 text-sm tracking-[0.28em]">
            Book a Consultation
          </a>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
