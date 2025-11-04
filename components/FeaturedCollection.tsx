"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  { src: "/collection-1.jpg", title: "Street Neon", price: "129.00 USD" },
  { src: "/collection-2.jpg", title: "Urban Pink", price: "149.00 USD" },
  { src: "/collection-3.jpg", title: "Mint Oversize", tag: "New", price: "120.25 USD" },
  { src: "/collection-4.jpg", title: "Techwear Layered", price: "168.00 USD" },
  { src: "/collection-5.jpg", title: "Graphic Black", price: "134.50 USD" },
];

export default function SignatureCollection() {
  const [active, setActive] = useState(2); // Center card default

  return (
    <section className="py-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[#111]">
          Signature Collection
        </h2>
        <p className="text-[#6d6d6d] mt-2 text-sm md:text-base">
          Own your style with comfort and attitude — made for trendsetters.
        </p>
      </div>

      {/* Cards */}
      <div className="flex items-center justify-center gap-5 md:gap-8 overflow-x-auto px-6 hide-scrollbar select-none">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out
            ${
              active === i
                ? "w-[260px] md:w-[310px] h-[450px] md:h-[520px] z-20 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)] scale-[1.04]"
                : "w-[150px] md:w-[200px] h-[340px] md:h-[420px] opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={item.src}
              fill
              alt={item.title}
              className="object-cover"
            />

            {/* Tag */}
            {item.tag && (
              <span className="absolute top-4 left-4 bg-white/90 text-[#111] text-xs uppercase px-3 py-1 rounded-full">
                {item.tag}
              </span>
            )}

            {/* Price */}
            {active === i && (
              <div className="absolute bottom-6 left-6 text-white text-sm bg-black/45 px-3 py-1 rounded-lg">
                Start from {item.price}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Orange Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#ff6a00] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition">
          +
        </button>
      </div>
    </section>
  );
}
