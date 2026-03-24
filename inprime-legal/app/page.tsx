import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Proof } from "@/components/sections/Proof";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { PillNav } from "@/components/PillNav";
import { AmbientBackground } from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <PillNav />
      <main className="relative z-[1]">
        <Hero />
        <div
          className="mx-auto max-w-[1100px]"
          style={{ height: 1, background: "var(--border)" }}
        />
        <Problems />
        <div
          className="mx-auto max-w-[1100px]"
          style={{ height: 1, background: "var(--border)" }}
        />
        <About />
        <div
          className="mx-auto max-w-[1100px]"
          style={{ height: 1, background: "var(--border)" }}
        />
        <Services />
        <Stats />
        <div
          className="mx-auto max-w-[1100px]"
          style={{ height: 1, background: "var(--border)" }}
        />
        <Proof />
        <div
          className="mx-auto max-w-[1100px]"
          style={{ height: 1, background: "var(--border)" }}
        />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
