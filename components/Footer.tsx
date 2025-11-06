"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-champagne/30 bg-white/60 backdrop-blur-[4px]">
      <div className="container-soft py-14 grid md:grid-cols-4 gap-10 text-sm">

        {/* Brand */}
        <div>
          <h4 className="font-[var(--font-display)] text-xl text-charcoal">
            Varnika Boutique
          </h4>
          <p className="text-warmgray mt-2 leading-relaxed">
            Timeless couture, crafted with heart.
          </p>
        </div>

        {/* Address */}
        <div>
          <h5 className="font-[var(--font-display)] text-charcoal text-lg">Visit</h5>
          <p className="text-warmgray mt-2">Siddipet • Telangana</p>
          <p className="text-warmgray mt-[2px]">+91 91001 62322</p>
        </div>

        {/* Branches with Icons */}
        <div>
          <h5 className="font-[var(--font-display)] text-charcoal text-lg">
            Branches
          </h5>

          <div className="mt-3 flex flex-col gap-2 text-[13px]">
            {[
              "Bangalore",
              "Chennai",
              "Pune",
              "Delhi",
              "Ahmedabad",
            ].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 text-warmgray hover:text-charcoal transition-all"
              >
                <MapPin size={15} className="text-[#b8924c]" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-[var(--font-display)] text-charcoal text-lg">
            Links
          </h5>
          <div className="mt-3 flex flex-col gap-2 text-[13px]">
            <Link className="text-warmgray hover:text-charcoal transition-colors" href="/services">
              Services
            </Link>
            <Link className="text-warmgray hover:text-charcoal transition-colors" href="/contact">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-warmgray pb-8">
        © {new Date().getFullYear()} Varnika Boutique
      </div>
    </footer>
  );
}
