import Image from "next/image";

import { projects } from "@/data/portfolio";

import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <Reveal
      as="section"
      id="projects"
      className="surface-panel rounded-4xl p-5 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Recent Projects"
          title="Selected work"
          description="A focused set of frontend builds that mirror real product experiences, from business dashboards to polished landing pages and interactive UI clones."
        />
        <a
          href="https://github.com/MaynardRT/Python-Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          <ArrowUpRightIcon />
          View repository
        </a>
      </div>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className="project-row rounded-3xl p-4 sm:p-5"
            delay={index * 90}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="image-shell relative aspect-16/10 overflow-hidden rounded-[1.25rem] border border-line bg-black/20">
                <Image
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="project-image object-cover object-top"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {project.techstack}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                {project.description}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
