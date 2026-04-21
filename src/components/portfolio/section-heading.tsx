export function SectionHeading({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="section-title text-3xl text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}
