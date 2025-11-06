"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[78vh] w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          fill
          alt="Varnika Boutique"
          className="object-cover brightness-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ef] via-transparent to-transparent" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
          <h1 className="font-[var(--font-display)] text-4xl md:text-6xl text-white drop-shadow-xl tracking-widest">
            VARNIKA BOUTIQUE
          </h1>
          <p className="text-white/90 mt-3 tracking-wide text-sm md:text-base">
            Where Heritage Meets Modern Luxury
          </p>
        </div>
      </section>

      <main className="container-soft py-24">

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-[var(--font-display)] text-4xl text-charcoal">
              Our Story
            </h2>
            <p className="mt-6 text-warmgray leading-relaxed text-lg">
              Varnika Boutique was born from a love of artistic draping, handloom textiles,
              and the elegance of timeless couture. Each creation is carefully crafted with
              precision, honouring tradition while embracing modern refinement.
            </p>
            <p className="mt-4 text-warmgray leading-relaxed text-lg">
              Our atelier works closely with skilled weavers, artisans, and designers across
              regions, bringing to life exclusive bridal sarees, couture lehengas, and
              personalized tailoring experiences.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden gold-live-border">
            <Image
              src="/about-portrait.jpg"
              alt="Couture Experience"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-champagne to-transparent"></div>

        {/* Values */}
        <section className="grid md:grid-cols-3 gap-10">
          {[
            {
              k: "Craftsmanship",
              v: "Hand-finished details, heirloom embroidery & signature draping.",
            },
            {
              k: "Curation",
              v: "Curated luxury textiles sourced from master artisans.",
            },
            {
              k: "Personal Care",
              v: "Private trials, styling support & precise couture tailoring.",
            },
          ].map((item) => (
            <div
              key={item.k}
              className="group relative rounded-3xl p-9 bg-gradient-to-br from-white to-linen
              border border-champagne/40 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)]
              transition-all duration-700 hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.25)] hover:-translate-y-1"
            >
              <span className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none gold-live-mask"/>
              <h3 className="font-[var(--font-display)] text-2xl text-charcoal">
                {item.k}
              </h3>
              <p className="text-warmgray mt-3">{item.v}</p>
            </div>
          ))}
        </section>

        {/* Branches — Royal Glow */}
        <section className="mt-28 text-center">
          <h3 className="font-[var(--font-display)] text-3xl text-charcoal tracking-[0.02em]">
            Boutique Locations
          </h3>

          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
            {["Bangalore", "Chennai", "Pune", "Delhi", "Ahmedabad"].map((city) => (
              <div key={city} className="relative group">
                {/* Glow Aura */}
                <span
                  className="absolute inset-0 rounded-full blur-[22px] opacity-0 group-hover:opacity-70 transition-all duration-700
                  bg-[linear-gradient(120deg,#c8a34e33,#f4e3b533,#a8843e33)] pointer-events-none"
                />

                {/* Label */}
                <span
                  className="relative z-10 px-8 py-3 text-[11px] md:text-sm tracking-[0.32em]
                  uppercase font-medium rounded-full border border-[#d7b97a]
                  text-[#6d5833] bg-white/80 backdrop-blur-[4px]
                  shadow-[0_3px_18px_-6px_rgba(200,163,78,0.42)]
                  transition-all duration-600 group-hover:shadow-[0_4px_28px_-4px_rgba(200,163,78,0.65)]
                  group-hover:bg-[#faf3df] group-hover:border-[#c8a34e]"
                >
                  {city}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-[10px] md:text-xs uppercase tracking-[0.45em] text-[#b8924c]">
            V A R N I K A • B O U T I Q U E • E X P A N S I O N
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
