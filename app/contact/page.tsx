import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="container-soft pt-16 md:pt-20">
        <h1 className="font-[var(--font-display)] text-4xl md:text-5xl text-charcoal">Book Your Appointment</h1>
        <p className="mt-3 text-warmgray max-w-2xl">
          Tell us a little about your occasion and preferred date. Our team will reach out with available slots.
        </p>

        <form className="mt-10 max-w-2xl space-y-6">
          <div>
            <label className="block text-sm text-warmgray mb-2">Full Name</label>
            <input className="w-full bg-white/70 border border-champagne/40 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-warmgray mb-2">Phone</label>
              <input className="w-full bg-white/70 border border-champagne/40 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
            </div>
            <div>
              <label className="block text-sm text-warmgray mb-2">Preferred Date</label>
              <input type="date" className="w-full bg-white/70 border border-champagne/40 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-warmgray mb-2">Message</label>
            <textarea rows={5} className="w-full bg-white/70 border border-champagne/40 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-champagne" />
          </div>
          <button className="btn-gold">Send Request</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
