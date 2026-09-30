import DemoCopyButton from "./DemoCopyButton";

interface DemoCodeBlockProps {
  code: string;
}

export default function DemoCodeBlock({
  code,
}: DemoCodeBlockProps) {
  return (
    <div className="demo-code">
      <DemoCopyButton value={code} />

      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}