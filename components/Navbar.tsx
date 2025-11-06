"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative text-sm tracking-[0.25em] uppercase text-[#6a6256] hover:text-[#1a1a1a] transition-colors"
    >
      {label}

      {/* GOLD SHIMMER UNDERLINE */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-[900ms] ease-out
        bg-[linear-gradient(90deg,#b78b3f,#e6d4a0,#caa55f,#f1e4b6)]
        bg-[length:300%_300%] animate-goldFlow
        ${active ? "w-full" : "w-0 group-hover:w-full"}
      `}
      />
    </Link>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-champagne/40
        ${
          scrolled
            ? "bg-[rgba(250,246,239,0.82)] backdrop-blur-xl shadow-[0_4px_28px_rgba(0,0,0,0.16)] py-4"
            : "bg-[#faf6ef]/95 py-6"
        }`}
      >
        <nav className="container-soft flex items-center justify-between">
          {/* Left Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About" />
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="font-[var(--font-display)] text-[1.9rem] tracking-[0.32em] text-[#1a1a1a] whitespace-nowrap"
          >
            VARNIKA <span className="text-[#c8a34e]">BOUTIQUE</span>
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem href="/services" label="Services" />
            <NavItem href="/contact" label="Contact" />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-[#1a1a1a]"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-[#faf7f2]/95 backdrop-blur-xl 
        shadow-[-8px_0_24px_rgba(0,0,0,0.18)] border-l border-champagne/40 
        transition-transform duration-500 z-[60] flex flex-col pt-24 px-8 gap-6
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-7 right-7 text-2xl text-[#1a1a1a]"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <NavItem href="/" label="Home" onClick={() => setMenuOpen(false)} />
        <NavItem href="/about" label="About" onClick={() => setMenuOpen(false)} />
        <NavItem href="/services" label="Services" onClick={() => setMenuOpen(false)} />
        <NavItem href="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
