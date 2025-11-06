"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

type Item = {
  src: string;
  title: string;
  tag?: string;
  ratio?: "square" | "portrait" | "landscape";
};

const items: Item[] = [
  { src: "/collection-1.jpg", title: "Bridal Kanchipattu", tag: "Heirloom", ratio: "portrait" },
  { src: "/collection-2.jpg", title: "Banarasi Goldwork", ratio: "portrait" },
  { src: "/collection-3.jpg", title: "Designer Lehenga", tag: "New", ratio: "portrait" },
  { src: "/collection-4.jpg", title: "Pastel Silk Saree", ratio: "landscape" },
  { src: "/collection-5.jpg", title: "Zari Kanchee", ratio: "portrait" },
  { src: "/hero-2.jpg", title: "Reception Edit", ratio: "landscape" },
  { src: "/hero-3.jpg", title: "Couture Blouse", ratio: "square" },
  { src: "/collection-3.jpg", title: "Sangeet Look", ratio: "landscape" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.08 },
  },
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function GalleryLuxury() {
  const [lightbox, setLightbox] = useState<Item | null>(null);

  return (
    <section className="bg-[#faf6ef] py-20">
      {/* Heading + Couture Label Divider */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container-soft text-center mb-16"
      >
        <h2 className="font-[var(--font-display)] text-3xl md:text-5xl text-[#1a1a1a] tracking-[0.02em]">
          Couture Showcase
        </h2>

        <div className="flex justify-center mt-6 mb-6">
          <div className="h-[1.4px] w-24 bg-gradient-to-r from-transparent via-[#c8a34e] to-transparent" />
        </div>

        <p className="text-[#6a6256] max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          A curated grid of bridal stories — refined silhouettes, luminous textiles, timeless craft.
        </p>

        <div className="mt-5 text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#c8a34e] font-medium">
          Varnika Couture
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="container-soft"
      >
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {items.map((it, idx) => {
            const span =
              it.ratio === "landscape"
                ? "md:col-span-7 md:row-span-2"
                : it.ratio === "square"
                ? "md:col-span-5 md:row-span-2"
                : "md:col-span-4 md:row-span-3";

            const aspect =
              it.ratio === "landscape"
                ? "aspect-[16/10]"
                : it.ratio === "square"
                ? "aspect-square"
                : "aspect-[3/4]";

            return (
              <motion.figure
                key={idx}
                variants={itemAnim}
                className={`group relative ${span} ${aspect} col-span-1 overflow-hidden rounded-[22px]`}
              >
                {/* Gold micro-frame */}
                <span className="absolute inset-0 rounded-[22px] border border-[#c8a34e]/40 pointer-events-none" />

                <button
                  onClick={() => setLightbox(it)}
                  className="absolute inset-0"
                >
                  <Image
                    src={it.src}
                    alt={it.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                    priority={idx < 2}
                  />
                </button>

                {it.tag && (
                  <span className="absolute top-3 left-3 z-10 rounded-full border border-[#c8a34e]/70 bg-[rgba(250,246,239,0.9)] px-3 py-[6px] text-[10px] uppercase tracking-wide text-[#1a1a1a]">
                    {it.tag}
                  </span>
                )}

                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-3 md:p-4 text-white/95 text-[11px] md:text-sm bg-gradient-to-t from-black/45 via-black/10 to-transparent">
                  <span className="font-medium drop-shadow-sm">{it.title}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 rounded-full bg-white/90 hover:bg-white px-3 py-1 text-sm text-[#1a1a1a] shadow"
            >
              Close
            </button>
            <div className="absolute left-3 bottom-3 text-white/95 text-sm md:text-base">
              {lightbox.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
