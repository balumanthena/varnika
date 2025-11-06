"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: "/collection-1.jpg", title: "Bridal Kanchipattu", tag: "Heirloom" },
  { src: "/collection-2.jpg", title: "Banarasi Goldwork" },
  { src: "/collection-3.jpg", title: "Designer Bridal Lehenga", tag: "New" },
  { src: "/collection-4.jpg", title: "Pastel Silk Saree" },
  { src: "/collection-5.jpg", title: "Zari Kanchee" },
];

export default function FeaturedCollection() {
  const [active, setActive] = useState(2);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // ✅ Smooth Auto-Scroll Loop
  useEffect(() => {
    const loop = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 3200);

    return () => clearInterval(loop);
  }, []);

  // ✅ Auto-center active card
  useEffect(() => {
    const cardWidth = 220; // adjust to match card width
    scrollRef.current?.scrollTo({
      left: (active - 1) * cardWidth,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <section className="bg-[#faf6ef] py-24 overflow-hidden relative">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="font-[var(--font-display)] text-4xl md:text-6xl text-[#1a1a1a]">
          Signature Collection
        </h2>
        <p className="text-[#6a6256] mt-3 text-base md:text-lg max-w-xl mx-auto">
          Own your heritage with grace — couture made personal.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex items-end gap-6 px-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory justify-center scroll-smooth"
      >
        {items.map((item, index) => {
          const isActive = index === active;

          return (
            <motion.div
              key={index}
              onClick={() => setActive(index)}
              layout
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`
                relative snap-center cursor-pointer flex-shrink-0 rounded-[32px] overflow-hidden
                transition-all duration-700
                ${isActive ? "h-[460px] w-[260px] z-20" : "h-[350px] w-[150px] opacity-60 hover:opacity-90"}
              `}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                priority={isActive}
              />

              {item.tag && (
                <span className="absolute top-4 left-4 bg-[rgba(255,249,240,0.92)] border border-[#c8a34e] text-[#1a1a1a] px-3 py-[6px] text-[10px] uppercase tracking-wide rounded-full">
                  {item.tag}
                </span>
              )}

              {isActive && (
                <div className="absolute bottom-5 left-5 text-white drop-shadow-xl text-lg">
                  {item.title}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/collection"
          className="btn-gold-live px-12 py-4 tracking-[0.25em]"
        >
          View Full Collection
        </a>
      </div>
    </section>
  );
}
