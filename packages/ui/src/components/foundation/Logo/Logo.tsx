import { forwardRef } from "react";
import type { CSSProperties } from "react";
import type { LogoProps } from "./Logo.types";

const Logo = forwardRef<HTMLDivElement, LogoProps>(function Logo(
  {
    branding = {},
    link = true,
    src,
    alt,
    imageSize,
    className,
    children,
    ...props
  },
  ref
) {
  const {
    name = "ShivanyaMS",
    subtitle = "Smart Solutions. Better Business.",
    href = "/",
  } = branding;

  const imageStyle: CSSProperties | undefined = imageSize !== undefined
    ? { width: imageSize, height: imageSize }
    : undefined;

  const image = src ? (
    <img
      src={src}
      alt={alt ?? String(name)}
      className="shivanya-logo-image"
      style={imageStyle}
    />
  ) : (
    <span className="shivanya-logo-mark" aria-hidden="true">S</span>
  );

  return (
    <div
      {...props}
      ref={ref}
      className={["shivanya-logo", className].filter(Boolean).join(" ")}
    >
      {link ? (
        <a href={href} className="shivanya-logo-image-link" aria-label={alt ?? String(name)}>
          {image}
        </a>
      ) : image}

      <div className="shivanya-logo-content">
        {link ? (
          <a href={href} className="shivanya-logo-title-link">
            <span className="shivanya-logo-title">{name}</span>
          </a>
        ) : (
          <span className="shivanya-logo-title">{name}</span>
        )}

        <span className="shivanya-logo-subtitle">{subtitle}</span>
      </div>

      {children}
    </div>
  );
});

Logo.displayName = "Logo";

export { Logo };
