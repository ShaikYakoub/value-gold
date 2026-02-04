import Navbar from "@/components/Navbar";
import OurLegacy2 from "@/components/OurLegacy2";
import Footer2 from "@/components/Footer2";
import FloatingActions2 from "@/components/FloatingActions2";

export default function LegacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <OurLegacy2 />
      </main>
      <FloatingActions2 />
      <Footer2 />
    </>
  );
}


