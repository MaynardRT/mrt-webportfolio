import { experience } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

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

      <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {experience.map((item, index) => (
          <Reveal
            key={item.role}
            as="article"
            className="timeline-row rounded-3xl p-5 sm:p-6"
            delay={index * 90}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.summary}
                </p>
              </div>
              <span className="timeline-chip">{item.period}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
