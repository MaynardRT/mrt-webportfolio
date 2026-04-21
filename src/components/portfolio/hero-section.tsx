import Image from "next/image";

import { heroSummary, socialLinks, stats } from "@/data/portfolio";

import { DownloadIcon, MailIcon } from "./icons";
import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <Reveal
      as="section"
      id="home"
      className="hero-shell overflow-hidden rounded-4xl p-4 sm:p-8 lg:p-10"
    >
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <Reveal
          as="aside"
          className="profile-card rounded-[1.75rem] p-5 sm:p-7"
          delay={50}
        >
          <div className="profile-frame image-ring mx-auto flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/images/profile.svg"
              alt="Portrait illustration of Maynard Toong"
              width={176}
              height={176}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 text-center">
            <h1 className="section-title text-3xl text-foreground">
              Maynard Toong
            </h1>
            <p className="mt-2 text-sm text-muted">
              Web Developer | Application Systems Engineer | AI Coding Talent
            </p>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.16em] text-muted">
            <span className="chip">Quezon City, Philippines</span>
            <span className="chip">Available for opportunities</span>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8">
            <a
              href="https://mrtwebsite-cc4d9.firebaseapp.com/Maynard%20Toong%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <DownloadIcon />
              Download Resume
            </a>
            <a href="#contact" className="secondary-button">
              <MailIcon />
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div>
          <Reveal
            className="surface-panel rounded-[1.75rem] p-5 sm:p-8 lg:p-10"
            delay={120}
          >
            <div className="hero-badge">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              {heroSummary.badge}
            </div>
            <h2 className="section-title mt-5 max-w-4xl text-3xl leading-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
              {heroSummary.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
              {heroSummary.description}
            </p>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  className="metric-panel rounded-3xl p-5"
                  delay={180 + index * 80}
                >
                  <p className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
