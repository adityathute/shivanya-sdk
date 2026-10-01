"use client";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  CopyButtonProps,
} from "./CopyButton.types";

const CopyButton = forwardRef<
  HTMLButtonElement,
  CopyButtonProps
>(function CopyButton(
  {
    value,
    size = "md",
    variant = "primary",
    timeout = 2000,
    disabled = false,
    fullWidth = false,
    copyText = "Copy",
    copiedText = "Copied!",
    children,
    className = "",
    onCopy,
    onClick,
    ...props
  },
  ref
) {
  const [copied, setCopied] = useState(false);

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (disabled) {
      return;
    }

    try {
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard?.writeText
      ) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea =
          document.createElement("textarea");

        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);
      }

      setCopied(true);

      onCopy?.(value);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, timeout);
    } catch (error) {
      console.error(
        "Failed to copy value:",
        error
      );
    }

    onClick?.(event);
  };

  const classes = [
    "shivanya-copy-button",
    `shivanya-copy-button-${size}`,
    `shivanya-copy-button-${variant}`,
    fullWidth
      ? "shivanya-copy-button-full"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      ref={ref}
      type="button"
      className={classes}
      disabled={disabled}
      onClick={handleClick}
      aria-busy={copied}
    >
      {children ??
        (copied ? copiedText : copyText)}
    </button>
  );
});

CopyButton.displayName = "CopyButton";

export { CopyButton };
