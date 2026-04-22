import { experience } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function getDisplayYear(period: string) {
  const matches = period.match(/\b\d{4}\b/g);

  if (!matches || matches.length === 0) {
    return period;
  }

  return matches[matches.length - 1];
}

export function ExperienceSection() {
  return (
    <Reveal
      as="section"
      id="experience"
      className="surface-panel rounded-4xl p-5 sm:p-8 lg:p-10"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Career timeline"
        description="A concise progression through academic foundation, analytical work, and current systems engineering responsibilities."
      />

      <div className="experience-track mt-6 sm:mt-8">
        {experience.map((item, index) => (
          <Reveal
            key={item.role}
            as="article"
            className="experience-item"
            delay={index * 90}
          >
            <span
              className={`experience-marker${index === 0 ? " is-active" : ""}`}
              aria-hidden="true"
            />

            <div className="experience-card">
              <div className="experience-row">
                <div className="max-w-3xl">
                  <h3 className="text-[1.32rem] font-semibold leading-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-base text-foreground">
                    {item.company}
                  </p>
                  <p className="experience-period mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {item.period}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted sm:mt-4">
                    {item.summary}
                  </p>
                </div>

                <span className="experience-year">
                  {getDisplayYear(item.period)}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
