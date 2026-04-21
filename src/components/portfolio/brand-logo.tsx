import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  size?: "header" | "footer" | "hero";
  alt?: string;
  priority?: boolean;
};

const sizeClasses = {
  header: "h-8 w-8 md:h-[2.15rem] md:w-[2.15rem]",
  footer: "h-[3.25rem] w-[3.25rem]",
  hero: "h-16 w-16 sm:h-18 sm:w-18",
} as const;

const sizePixels = {
  header: 34,
  footer: 52,
  hero: 72,
} as const;

export function BrandLogo({
  className = "",
  size = "header",
  alt = "MRT logo",
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={`brand-logo relative inline-flex overflow-hidden rounded-[28%] ${sizeClasses[size]} ${className}`.trim()}
    >
      <Image
        src="/images/mrt-logo.svg"
        alt={alt}
        width={sizePixels[size]}
        height={sizePixels[size]}
        priority={priority}
        className="brand-logo-dark h-full w-full object-cover"
      />
      <Image
        src="/images/mrt-logo-light.svg"
        alt={alt}
        width={sizePixels[size]}
        height={sizePixels[size]}
        priority={priority}
        className="brand-logo-light absolute inset-0 h-full w-full object-cover"
      />
    </span>
  );
}
