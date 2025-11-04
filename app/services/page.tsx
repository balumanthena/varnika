import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { title: "Bridal Couture", details: "Bespoke bridal lehengas, reception gowns, trousseau curation." },
  { title: "Designer Sarees", details: "Kanjivaram, Banarasi, Organza, and hand-embroidered pieces." },
  { title: "Custom Tailoring", details: "Perfect fits across blouses, lehengas, and occasion-wear." },
  { title: "Styling & Trials", details: "Lookbooks, jewelry pairing, and private trial sessions." }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="container-soft pt-16 md:pt-20">
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl text-charcoal">Our Services</h1>
        <p className="mt-3 text-warmgray max-w-3xl">
          From bespoke bridal couture to effortless everyday elegance, our team brings your vision to life.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-champagne/35 bg-white/70 p-8 shadow-soft">
              <h3 className="font-[var(--font-display)] text-2xl text-charcoal">{s.title}</h3>
              <p className="text-warmgray mt-2">{s.details}</p>
            </div>
          ))}
        </div>

        <div className="text-center my-14">
          <a href="/contact" className="btn-gold">Book a Consultation</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
