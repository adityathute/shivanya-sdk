import { useState } from "react";

interface DemoCopyButtonProps {
  value: string;
}

export default function DemoCopyButton({
  value,
}: DemoCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      type="button"
      className="demo-copy-button"
      onClick={handleCopy}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}