import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-champagne/30 bg-white/60">
      <div className="container-soft py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-[var(--font-display)] text-xl text-charcoal">Varnika Boutique</h4>
          <p className="text-warmgray mt-2">Timeless couture, crafted with heart.</p>
        </div>
        <div>
          <h5 className="font-[var(--font-display)] text-charcoal">Visit</h5>
          <p className="text-warmgray mt-2">Siddipet • Telangana</p>
          <p className="text-warmgray">+91-96409-60496</p>
        </div>
        <div>
          <h5 className="font-[var(--font-display)] text-charcoal">Links</h5>
          <div className="mt-2 flex flex-col gap-1">
            <Link className="text-warmgray hover:text-charcoal" href="/services">Services</Link>
            <Link className="text-warmgray hover:text-charcoal" href="/contact">Book Appointment</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-warmgray pb-8">© {new Date().getFullYear()} Varnika Boutique</div>
    </footer>
  );
}
