import { stackGroups } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function StackSection() {
  return (
    <Reveal
      as="section"
      id="stack"
      className="surface-panel rounded-4xl p-5 sm:p-8 lg:p-10"
    >
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools across frontend, backend, and creative work"
        description="The stack reflects the practical tools I've used in projects, learning work, and broader technical support tasks."
      />

      <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
        {stackGroups.map((group, index) => (
          <Reveal
            key={group.title}
            as="article"
            className="stack-card rounded-3xl p-5 sm:p-6"
            delay={index * 80}
          >
            <h3 className="text-lg font-semibold text-foreground">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
