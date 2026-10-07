'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { CalendarDays, Church, Clock3, MapPin, Sparkles } from "lucide-react";

const ceremonyVenue = {
  name: "CSI Christu Arasar Church",
  address: "Muthurajapuram",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=CSI+Christu+Arasar+Church+Muthurajapuram",
};

const receptionVenue = {
  name: "I.G.S Convention Center",
  address: "(Reception)\n6:30 PM",
  mapsUrl: "https://maps.app.goo.gl/xDsELycLfM6UGcJJA",
};

function CrossFlourish({ className = "h-14 w-14", glow = false, color = "text-[#9e6e34]", size = "text-2xl", coreClassName = "" }: { className?: string; glow?: boolean; color?: string; size?: string; coreClassName?: string }) {
  return (
    <span className={`cross-flourish ${color}`}>
      <span className="cross-orb" />
      <span className="cross-orb" />
      <span className={`cross-core ${className} flex items-center justify-center rounded-full border border-[#e2c696] bg-[#fffaf4] ${size} shadow-sm ${coreClassName}`}>
        ✝
      </span>
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3 text-center">
      <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#c7a76f] to-transparent" />
      <p className="font-serif text-3xl tracking-[0.12em] text-burgundy sm:text-4xl">{children}</p>
      <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#c7a76f] to-transparent" />
    </div>
  );
}

function EventCard({
  title,
  date,
  time,
  venue,
  icon,
  buttonLabel,
  mapsUrl,
}: {
  title: string;
  date: string;
  time?: string;
  venue: string;
  icon: React.ReactNode;
  buttonLabel: string;
  mapsUrl: string;
}) {
  return (
    <article className="rounded-[2rem] border border-[#e7d4b0] bg-[#fffdfb]/80 p-5 shadow-[0_25px_60px_rgba(138,90,64,0.09)] backdrop-blur-sm sm:p-8">
      <div className="mb-5 flex items-center justify-center text-[#9e6e34] sm:mb-6">{icon}</div>
      <h3 className="mb-5 text-center font-serif text-2xl text-burgundy sm:mb-6 sm:text-3xl">{title}</h3>
      <div className="space-y-4 text-center text-[14px] text-[#4b3b3e] sm:space-y-5 sm:text-base">
        <div className="flex items-center justify-center gap-3">
          <CalendarDays className="h-4 w-4 text-[#a16443]" />
          <span>{date}</span>
        </div>
        {time ? (
          <div className="flex items-center justify-center gap-3">
            <Clock3 className="h-4 w-4 text-[#a16443]" />
            <span>{time}</span>
          </div>
        ) : null}
        <div className="flex items-start justify-center gap-3">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#a16443]" />
          <span className="whitespace-pre-line leading-relaxed">{venue}</span>
        </div>
      </div>
      <div className="mt-6 flex justify-center sm:mt-8">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#b88b5a] bg-[#5f2432] px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#fffaf2] transition hover:-translate-y-0.5 hover:bg-[#3d1822] sm:px-6 sm:py-3 sm:text-sm"
        >
          {buttonLabel}
        </a>
      </div>
    </article>
  );
}

export default function HomePage() {
  const weddingDate = new Date("2026-12-28T10:00:00+05:30");
  const [showIntro, setShowIntro] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const introTimer = window.setTimeout(() => setShowIntro(false), 2200);
    const handleScroll = () => setHasScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const countdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    countdown();
    const timer = window.setInterval(countdown, 1000);

    return () => {
      window.clearTimeout(introTimer);
      window.removeEventListener("scroll", handleScroll);
      window.clearInterval(timer);
    };
  }, []);

  const scrollToInvitation = () => {
    window.scrollTo({ top: window.innerHeight * 0.65, behavior: "smooth" });
  };

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(249,244,238,1)_45%,_rgba(230,220,209,1)_100%)] text-ink">
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(255,247,232,0.96),_rgba(245,232,213,0.94)_55%,_rgba(102,63,53,0.88))] transition-opacity duration-[1400ms] ease-out ${
          showIntro ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="intro-petal intro-petal--1" />
        <div className="intro-petal intro-petal--2" />
        <div className="intro-petal intro-petal--3" />
        <div className="intro-petal intro-petal--4" />
        <div className="intro-petal intro-petal--5" />
        <div className="intro-petal intro-petal--6" />
        <div className="absolute inset-0 bg-floral opacity-80" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#fffaf6]/70 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
              <CrossFlourish className="h-20 w-20" glow coreClassName="border border-[#f3d79f] bg-[#fffaf3]/80 text-4xl text-[#8b5e3b] shadow-[0_0_35px_rgba(199,167,111,0.4)]" />
            </div>
          <p className="mb-4 font-sans text-[0.75rem] uppercase tracking-[0.5em] text-[#7a5642]">
            Wedding Invitation
          </p>
          <div className="max-w-xl font-serif text-5xl leading-none text-[#5f2432] sm:text-6xl lg:text-7xl">
            C. Jefron Vasanth
          </div>
          <div className="my-3 text-3xl tracking-[0.35em] text-[#b2804d]">&</div>
          <div className="max-w-xl font-serif text-5xl leading-none text-[#5f2432] sm:text-6xl lg:text-7xl">
            S. Anshiya
          </div>
          <p className="mt-6 max-w-2xl font-serif text-lg italic text-[#6f4b41] sm:text-xl">
            “அன்பு பொறுமையும் தயவும் நிறைந்திருக்கிறது; அன்பு எதையும் நம்புகிறது, எதையும் நம்பிக்கையுடன் எதிர்கொள்கிறது.”
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#8a6a52]">1 கொரிந்தியர் 13:4-7</p>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToInvitation}
        className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full border border-[#d9b27d] bg-[#fffaf3]/90 px-5 py-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[#5d3b41] shadow-[0_16px_40px_rgba(94,57,44,0.14)] backdrop-blur-sm transition-all duration-500 ${
          hasScrolled ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
        }`}
      >
        Scroll to open invitation
      </button>

      <div
        className={`mx-auto max-w-6xl px-4 py-6 transition-all duration-700 ease-out sm:px-6 lg:px-8 ${
          hasScrolled ? "translate-y-0 opacity-100" : "translate-y-8 opacity-80"
        }`}
      >
        <section className="relative overflow-hidden rounded-[2.5rem] border border-[#e9dcc3] bg-[#fffdfb]/80 px-3 py-6 shadow-glow sm:px-8 sm:py-12 lg:px-12 lg:py-16 invitation-frame">
          <div className="absolute inset-0 bg-floral opacity-80" />
          <div className="absolute left-5 top-8 h-24 w-24 rounded-full border border-[#d9b27d]/50 bg-[#fffaf3]/60 blur-sm" />
          <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-[#d9b27d]/50 bg-[#fffaf3]/60 blur-sm" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-6 animate-[float_8s_ease-in-out_infinite] text-[#a67a45]">
              <Sparkles className="mx-auto h-8 w-8" />
            </div>

            <p className="mb-6 font-sans text-[0.72rem] uppercase tracking-[0.42em] text-[#7d5c4d] sm:text-xs">
              Together with their families
            </p>

            <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-[#e7d4b0] bg-[#f6efe8] p-2 shadow-[0_25px_60px_rgba(104,69,52,0.12)] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#f9f0e7]/60 via-transparent to-[#f0d9bf]/40" />
                <Image
                  src="/couple-reference.png"
                  alt="C. Jefron Vasanth and S. Anshiya"
                  width={1200}
                  height={980}
                  priority
                  className="h-[300px] w-full object-cover object-center sm:h-[420px] md:h-[560px]"
                />
              </div>
            </div>

            <div className="space-y-2 font-serif leading-none text-burgundy">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl">C. Jefron Vasanth</h1>
              <div className="text-3xl tracking-[0.2em] text-[#a26757] sm:text-4xl">&</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl">S. Anshiya</h2>
            </div>

            <div className="mt-8 border-y border-[#ead8b2] py-5 text-sm uppercase tracking-[0.24em] text-[#5d3b41] sm:text-base">
              Invite you to celebrate their Wedding
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-8">
              <div className="rounded-full border border-[#d9b27d] bg-[#fffaf4] px-4 py-2 shadow-sm sm:px-5 sm:py-3">
                <p className="font-serif text-xl text-burgundy sm:text-2xl">28 December 2026</p>
              </div>
              <div className="rounded-full border border-[#d9b27d] bg-[#fffaf4] px-4 py-2 shadow-sm sm:px-5 sm:py-3">
                <p className="font-serif text-xl text-burgundy sm:text-2xl">10:00 AM</p>
              </div>
            </div>

            <div className="mt-8 flex w-full justify-center">
              <div className="grid w-full max-w-2xl grid-cols-2 gap-3 justify-items-center sm:grid-cols-4 sm:gap-5">
                {countdownItems.map(({ label, value }) => (
                  <div key={label} className="flex w-full max-w-[120px] flex-col items-center justify-center rounded-[1.25rem] border border-[#e3cfa4] bg-[#fffaf5]/80 px-2 py-4 text-center shadow-sm sm:px-3">
                    <div className="font-serif text-3xl text-burgundy sm:text-4xl">{String(value).padStart(2, "0")}</div>
                    <div className="mt-1 text-[0.62rem] uppercase tracking-[0.25em] text-[#7b5d4f]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center text-[#9e6e34]">
              <CrossFlourish className="h-14 w-14" glow />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-4xl px-2 py-6 text-center sm:px-6 sm:py-8">
          <SectionHeading>Wedding Message</SectionHeading>
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-[#4b3b3e] sm:space-y-5 sm:text-lg sm:text-xl">
            <p className="font-serif italic text-burgundy">
              “With grateful hearts and the abundant grace of God,
              <br />
              we invite you to join us as we celebrate the beginning
              <br />
              of a beautiful new journey together.”
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-center font-serif text-burgundy sm:mt-12 sm:gap-4 sm:text-3xl">
            <span className="text-3xl sm:text-5xl">C. Jefron Vasanth</span>
            <span className="text-2xl tracking-[0.25em] text-[#8c6b5a]">weds</span>
            <span className="text-3xl sm:text-5xl">S. Anshiya</span>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-2 sm:px-6">
          <SectionHeading>Wedding Ceremony</SectionHeading>
          <div className="grid gap-6 md:grid-cols-1">
            <EventCard
              title="The Wedding Ceremony"
              date="Monday, 28th December 2026"
              time="10:00 AM"
              venue={`${ceremonyVenue.name}\n${ceremonyVenue.address}`}
              icon={<Church className="h-9 w-9" />}
              buttonLabel="Get Directions"
              mapsUrl={ceremonyVenue.mapsUrl}
            />
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-5xl px-2 sm:px-6">
          <SectionHeading>Reception</SectionHeading>
          <div className="grid gap-6 md:grid-cols-1">
            <EventCard
              title="The Reception"
              date="Monday, 28th December 2026"
              time="6:30 PM"
              venue={`${receptionVenue.name}\n${receptionVenue.address}`}
              icon={<MapPin className="h-9 w-9" />}
              buttonLabel="View Location"
              mapsUrl={receptionVenue.mapsUrl}
            />
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl px-2 pb-12 sm:px-6">
          <SectionHeading>Couple</SectionHeading>
          <div className="rounded-[2rem] border border-[#e7d4b0] bg-[#fffdfb]/80 p-4 shadow-[0_25px_70px_rgba(121,74,60,0.08)] sm:p-10">
<div className="mb-8 flex flex-col items-center justify-center gap-4 text-center font-serif text-burgundy sm:flex-row sm:gap-10">
               <span className="text-3xl sm:text-5xl">C. Jefron Vasanth</span>
               <span className="text-2xl tracking-[0.25em] text-[#8c6b5a]">Weds</span>
               <span className="text-3xl sm:text-5xl">S. Anshiya</span>
             </div>

             <div className="grid gap-6 sm:grid-cols-2">
               <div className="overflow-hidden rounded-[1.75rem] border border-[#ebddc4] bg-[#f3e9e2] p-3 shadow-[0_18px_50px_rgba(121,74,60,0.08)]">
                 <div className="relative overflow-hidden rounded-[1.4rem]">
                   <Image
                     src="/couple-reference.png"
                     alt="Wedding portrait of the couple"
                     width={1000}
                     height={1200}
                     className="h-[280px] w-full object-cover object-center sm:h-[500px]"
                   />
                 </div>
               </div>

               <div className="flex flex-col justify-center rounded-[1.75rem] border border-[#ebddc4] bg-[#f9f5f1] p-6">
                 <p className="font-serif text-2xl text-burgundy sm:text-3xl">Our Journey</p>
                 <p className="mt-5 text-base leading-8 text-[#4b3b3e]">
                   With love, faith, and family blessing, we begin this new chapter together. We are grateful for the grace of God and the warmth of everyone who has been part of our story.
                 </p>
                 <div className="mt-8 flex items-center gap-3 text-[#9b6e46]">
                   <span className="inline-block h-px flex-1 bg-[#d7c1a3]" />
                   <span className="text-2xl">✝</span>
                   <span className="inline-block h-px flex-1 bg-[#d7c1a3]" />
                 </div>
               </div>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}
