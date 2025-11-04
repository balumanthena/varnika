import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedCollection from "@/components/FeaturedCollection";


const features = [
  { title: "Bridal Couture", desc: "One-of-one ensembles with heirloom craftsmanship." },
  { title: "Designer Sarees", desc: "Hand-picked textiles with signature draping." },
  { title: "Custom Tailoring", desc: "Precision fits, refined finishes, made for you." }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollection />

        {/* Features */}
        <section className="container-soft my-16 md:my-24">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/70 border border-champagne/30 rounded-3xl p-8 shadow-soft">
                <h3 className="font-[var(--font-display)] text-2xl text-charcoal">{f.title}</h3>
                <p className="mt-2 text-warmgray">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Soft callout */}
        <section className="container-soft my-10 md:my-16">
          <div className="rounded-3xl border border-champagne/40 bg-gradient-to-br from-white to-linen p-10 text-center shadow-soft">
            <h4 className="font-[var(--font-display)] text-3xl text-charcoal">Experience the Fitting Lounge</h4>
            <p className="mt-2 text-warmgray">Private appointments • Styling assistance • Bespoke alterations</p>
            <a href="/contact" className="btn-gold mt-6">Reserve Your Slot</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
