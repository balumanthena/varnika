import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Footer from "@/components/Footer";
import GalleryLuxury from "@/components/GalleryLuxury";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <GalleryLuxury />
      </main>
      <Footer />
    </>
  );
}
