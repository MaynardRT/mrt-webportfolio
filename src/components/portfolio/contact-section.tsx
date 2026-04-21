import { contactActions, socialLinks } from "@/data/portfolio";

import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function getContactIcon(label: string) {
  switch (label) {
    case "Send Email":
      return <MailIcon className="h-5 w-5" />;
    case "Call":
      return <PhoneIcon className="h-5 w-5" />;
    case "View Location":
      return <MapPinIcon className="h-5 w-5" />;
    default:
      return null;
  }
}

export function ContactSection() {
  return (
    <Reveal
      as="section"
      id="contact"
      className="surface-panel rounded-4xl p-5 sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Open to opportunities and conversations"
            description="If you want to discuss roles, projects, or collaboration, the fastest way to reach me is through email or LinkedIn."
          />
        </div>

        <div className="grid gap-3">
          {contactActions.map((item, index) => (
            <Reveal
              key={item.label}
              className="contact-card rounded-3xl p-5"
              delay={index * 80}
            >
              <a
                href={item.href}
                target={item.label === "View Location" ? "_blank" : undefined}
                rel={
                  item.label === "View Location"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {item.label}
                </p>
                <div className="mt-3 flex items-start gap-3">
                  <span className="contact-icon">
                    {getContactIcon(item.label)}
                  </span>
                  <p className="text-base font-medium text-foreground sm:text-lg">
                    {item.value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
