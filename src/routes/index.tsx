import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  ExternalLink,
  GraduationCap,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

import academyImage from "@/assets/academy-training.jpg";
import hairImage from "@/assets/hair-detail.jpg";
import heroImage from "@/assets/salon-hero.jpg";
import makeupImage from "@/assets/makeup-detail.jpg";
import { Button } from "@/components/ui/button";

const PHONE_DISPLAY = "076269 51020";
const PHONE_LINK = "tel:+917626951020";
const DIRECTIONS_LINK =
  "https://www.google.com/maps/search/?api=1&query=G6QM%2B7V%20Rayya%2C%20Punjab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Salon & Academy — Beauty Parlour in Rayya" },
      {
        name: "description",
        content:
          "Luxury Salon & Academy in Rayya, Punjab. Call to book professional hair, beauty and bridal services.",
      },
      { property: "og:title", content: "Luxury Salon & Academy — Rayya" },
      {
        property: "og:description",
        content: "Beauty, craft and professional training in Rayya, Punjab. Call to book your appointment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navItems = [
  ["Services", "#services"],
  ["Academy", "#academy"],
  ["Our work", "#work"],
  ["Visit", "#visit"],
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/25 text-primary-foreground">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:h-24 md:px-10 lg:px-16">
        <a href="#top" aria-label="Luxury Salon & Academy home" className="flex flex-col leading-none">
          <span className="font-display text-[1.55rem]">Luxury</span>
          <span className="mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.3em]">Salon & Academy</span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-70">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="light" className="min-h-11 px-5">
            <a href={PHONE_LINK}><Phone className="size-4" /> Book now</a>
          </Button>
        </div>
        <button
          type="button"
          className="flex size-11 items-center justify-center border border-primary-foreground/40 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-primary-foreground/25 bg-primary px-5 py-6 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-5">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="font-display text-3xl">
                {label}
              </a>
            ))}
            <Button asChild variant="light" className="mt-2 w-full">
              <a href={PHONE_LINK}><Phone className="size-4" /> Book an appointment</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
      <span className={`h-px w-8 ${light ? "bg-primary-foreground/50" : "bg-accent"}`} />
      {children}
    </p>
  );
}

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-background">
      <Header />

      <section className="relative min-h-[92svh] bg-primary text-primary-foreground">
        <img src={heroImage} alt="Client receiving a polished hair styling service" width={1280} height={1600} className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] items-end px-5 pb-20 pt-36 md:px-10 md:pb-24 lg:px-16">
          <div className="editorial-rise max-w-3xl">
            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs uppercase tracking-[0.16em]">
              <span className="flex items-center gap-2"><Star className="size-4 fill-accent text-accent" /> 4.8 <span className="opacity-65">(36 reviews)</span></span>
              <span className="h-3 w-px bg-primary-foreground/35" />
              <span>Beauty Parlour · Rayya</span>
            </div>
            <h1 className="max-w-2xl text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-[7.4rem]">
              Luxury <span className="italic text-accent">Salon</span><br />& Academy
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/80 md:text-lg">
              Considered beauty, polished craft and professional training—under one roof in Rayya.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="light"><a href={PHONE_LINK}><Phone className="size-4" /> Book an appointment</a></Button>
              <Button asChild variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#services">Explore services <ArrowDown className="size-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 text-sm md:grid-cols-3 md:px-10 lg:px-16">
          <div className="flex items-center gap-3"><MapPin className="size-5 text-accent" /><span>Pheruman Rd, Rayya, Punjab 143112</span></div>
          <div className="flex items-center gap-3 md:justify-center"><Clock3 className="size-5 text-accent" /><span>Open · Closes 8 pm</span></div>
          <a href={PHONE_LINK} className="flex items-center gap-3 transition-opacity hover:opacity-65 md:justify-end"><Phone className="size-5 text-accent" /><span>{PHONE_DISPLAY}</span></a>
        </div>
      </section>

      <section id="services" className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><Eyebrow>The salon</Eyebrow><h2 className="mt-5 max-w-md text-5xl leading-[0.98] md:text-7xl">Beauty, shaped around <span className="italic text-accent">you.</span></h2></div>
            <div className="lg:pt-10"><p className="max-w-xl text-lg leading-8 text-muted-foreground">From everyday polish to your most photographed moments, our salon brings focused attention to every detail.</p></div>
          </div>
          <div className="mt-20 grid border-t border-border md:grid-cols-3">
            {[
              { icon: Scissors, number: "01", title: "Hair", copy: "Cuts, styling and finishing shaped to suit your look and occasion." },
              { icon: Sparkles, number: "02", title: "Beauty", copy: "Considered beauty services with a refined, professional finish." },
              { icon: Star, number: "03", title: "Bridal", copy: "Hair and makeup artistry designed for wedding celebrations." },
            ].map((service) => (
              <article key={service.title} className="border-b border-border py-10 md:border-r md:px-8 md:last:border-r-0 lg:px-12">
                <div className="flex items-center justify-between"><service.icon className="size-6 text-accent" /><span className="text-xs text-muted-foreground">{service.number}</span></div>
                <h3 className="mt-16 text-4xl">{service.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{service.copy}</p>
                <a href={PHONE_LINK} className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em]">Call to book <ArrowUpRight className="size-4" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><Eyebrow light>Our work</Eyebrow><h2 className="mt-5 text-5xl md:text-7xl">Made for the <span className="italic text-accent">moment.</span></h2></div><p className="max-w-sm text-sm leading-6 text-primary-foreground/65">A closer look at the detail, care and finish behind each appointment.</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-12">
            <figure className="group md:col-span-7"><div className="aspect-[4/5] overflow-hidden md:aspect-[5/4]"><img src={makeupImage} alt="Bridal makeup finishing detail" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" /></div><figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.15em]"><span>Bridal artistry</span><span className="text-primary-foreground/50">01</span></figcaption></figure>
            <figure className="group md:col-span-5 md:mt-24"><div className="aspect-[4/5] overflow-hidden"><img src={hairImage} alt="Long dark hair styled into polished waves" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" /></div><figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.15em]"><span>Hair styling</span><span className="text-primary-foreground/50">02</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section id="academy" className="grid lg:grid-cols-2">
        <div className="min-h-[460px] lg:min-h-[720px]"><img src={academyImage} alt="Beauty educator demonstrating hairstyling to academy students" loading="lazy" width={1536} height={1024} className="h-full w-full object-cover" /></div>
        <div className="flex items-center bg-secondary px-5 py-20 md:px-16 lg:px-20">
          <div className="max-w-xl"><Eyebrow>The academy</Eyebrow><GraduationCap className="mt-12 size-8 text-accent" /><h2 className="mt-7 text-5xl leading-[0.98] md:text-7xl">Learn the craft. Build your <span className="italic text-accent">future.</span></h2><p className="mt-7 max-w-lg leading-7 text-muted-foreground">Explore hands-on beauty training in a professional salon environment. Speak with us to learn more about academy opportunities.</p><Button asChild className="mt-9"><a href={PHONE_LINK}><Phone className="size-4" /> Enquire about the academy</a></Button></div>
        </div>
      </section>

      <section className="px-5 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl"><div className="flex justify-center gap-1 text-accent" aria-label="4.8 out of 5 stars">{[1,2,3,4,5].map((star) => <Star key={star} className="size-5 fill-current" />)}</div><p className="mt-6 font-display text-7xl leading-none">4.8</p><p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em]">Based on 36 reviews</p><div className="mx-auto mt-10 h-px w-20 bg-accent" /><p className="mt-10 font-display text-3xl italic text-muted-foreground md:text-4xl">Beauty service trusted by clients in Rayya.</p></div>
      </section>

      <section id="visit" className="bg-card px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1312px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div><Eyebrow>Visit us</Eyebrow><h2 className="mt-5 text-6xl leading-[0.92] md:text-8xl">Your next look starts <span className="italic text-accent">here.</span></h2><Button asChild className="mt-9"><a href={PHONE_LINK}><Phone className="size-4" /> Call {PHONE_DISPLAY}</a></Button></div>
          <div className="border-t border-border">
            <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[8rem_1fr]"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Address</span><span>Pheruman Rd, Rayya, Punjab 143112</span></div>
            <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[8rem_1fr]"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Hours</span><span>Open · Closes 8 pm</span></div>
            <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[8rem_1fr]"><span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Plus Code</span><span>G6QM+7V Rayya, Punjab</span></div>
            <div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="outline"><a href={DIRECTIONS_LINK} target="_blank" rel="noreferrer"><MapPin className="size-4" /> Directions</a></Button><Button asChild variant="ghost"><a href="https://luxurysalonnacademy.com" target="_blank" rel="noreferrer">Visit website <ExternalLink className="size-4" /></a></Button></div>
          </div>
        </div>
      </section>

      <footer className="bg-primary px-5 py-10 text-primary-foreground md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-4xl">Luxury</p><p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-primary-foreground/65">Salon & Academy</p></div><div className="flex flex-col gap-2 text-xs text-primary-foreground/60 md:items-end"><p>Pheruman Rd, Rayya, Punjab 143112</p><p>© 2026 Luxury Salon & Academy</p></div></div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <Button asChild className="w-full shadow-2xl"><a href={PHONE_LINK}><Phone className="size-4" /> Book an appointment</a></Button>
      </div>
    </main>
  );
}