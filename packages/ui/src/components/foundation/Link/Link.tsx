import { forwardRef } from "react";
import type { LinkProps } from "./Link.types";

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    children,
    href,
    variant = "default",
    size = "md",
    underline = false,
    external = false,
    disabled = false,
    className,
    target,
    rel,
    onClick,
    ...props
  },
  ref
) {
  const classes = [
    "shivanya-link",
    `shivanya-link-${variant}`,
    `shivanya-link-${size}`,
    underline ? "shivanya-link-underline" : "",
    disabled ? "shivanya-link-disabled" : "",
    className,
  ].filter(Boolean).join(" ");

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      {...props}
      ref={ref}
      href={href}
      className={classes}
      target={external ? "_blank" : target}
      rel={external ? "noopener noreferrer" : rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";

export { Link };
