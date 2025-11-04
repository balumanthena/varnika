"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/hero-1.jpg",
  "/hero-2.jpg",
  "/hero-3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#faf7f2] pt-28 pb-32">
      <div className="container-soft grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT BLOCK */}
        <div>
          <p className="uppercase tracking-[0.28em] text-[#6a6256] text-xs">
            Varnika Boutique
          </p>

          <h1 className="font-[var(--font-display)] mt-4 text-5xl md:text-6xl leading-tight text-[#1a1a1a]">
            Soft Luxury,
            <br />
            <span className="gold-underline">Couture Artistry.</span>
          </h1>

          <p className="mt-5 text-[#6a6256] text-lg max-w-md leading-relaxed">
            Crafted with heritage precision and graceful elegance — your attire becomes a timeless expression.
          </p>

          <div className="mt-8">
            <a href="/contact" className="btn-gold-live">
              Book Appointment
            </a>
          </div>

          {/* STAT CARD */}
          <div className="mt-10 flex items-center gap-6 bg-[#f5efe2] px-6 py-4 rounded-2xl shadow-sm border border-[#e8dcc4]">
            <h3 className="text-4xl font-[var(--font-display)] text-[#c8a34e]">400+</h3>
            <p className="text-sm text-[#6a6256] leading-snug">
              Custom Couture Pieces <br /> Crafted for Clients
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING TAGS */}
        <div className="gold-live-border relative">
          <div className="gold-halo"></div>
          <div className="gold-specks"></div>

          <div className="gold-live-inner relative h-[460px] md:h-[540px] overflow-hidden rounded-3xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.25)]">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Boutique Style"
                fill
                className={`object-cover transition-opacity duration-[1200ms] ease-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>

          {/* FLOATING TAGS */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 space-y-3">
            {["Handcrafted", "Premium Fabrics", "Bespoke Fit"].map((tag, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm border border-[#e8dcc4] shadow-md rounded-full px-4 py-2 text-sm text-[#6a6256] hover:bg-white transition"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
