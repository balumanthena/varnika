import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container-soft pt-16 md:pt-20">
        <section className="my-12 md:my-16">
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl text-charcoal">Our Story</h1>
          <p className="mt-4 text-warmgray text-lg max-w-3xl">
            Founded with a devotion to timeless beauty, Varnika Boutique brings together artisans, designers, and stylists
            who believe couture is an emotion. We curate textiles and craft silhouettes that honour tradition while embracing
            contemporary grace.
          </p>
        </section>

        <section className="my-10 grid md:grid-cols-3 gap-6">
          {[
            { k: 'Craftsmanship', v: 'Hand-finished details and heirloom techniques' },
            { k: 'Curation', v: 'Only the finest fabrics and embellishments' },
            { k: 'Care', v: 'Personalized fittings and aftercare' }
          ].map((i) => (
            <div key={i.k} className="bg-white/70 border border-champagne/30 rounded-3xl p-8 shadow-soft">
              <h3 className="font-[var(--font-display)] text-2xl text-charcoal">{i.k}</h3>
              <p className="text-warmgray mt-2">{i.v}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
