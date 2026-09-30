import { useState } from "react";

import {
  Autocomplete,
  Typography,
  autocompleteDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";

import DemoHeader from "../../../components/demo/DemoHeader";

import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vite",
  "Next.js",
  "Node.js",
  "Django",
];

export default function AutocompleteDemo() {
  const [value, setValue] = useState("");

  return (
    <section className="demo">
      <DemoHeader
        title={autocompleteDocs.name}
        description={autocompleteDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-form-stack">
        <Autocomplete
          data={technologies}
        />
      </div>
      </DemoSection>

      <DemoSection title="Clearable">
        <div className="demo-form-stack">
        <Autocomplete
          data={technologies}
          clearable
        />
      </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <div className="demo-form-stack">
        <Autocomplete
          data={technologies}
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          clearable
        />

        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Current value: {value || "None"}
        </Typography>
      </div>
      </DemoSection>

      <DemoSection title="Different Data">
        <div className="demo-form-stack">
        <Autocomplete
          data={[
            "India",
            "United States",
            "United Kingdom",
            "Canada",
            "Australia",
            "Germany",
            "Japan",
          ]}
          clearable
        />

        <Autocomplete
          data={[
            "Mumbai",
            "Pune",
            "Delhi",
            "Bengaluru",
            "Hyderabad",
            "Chennai",
            "Nagpur",
          ]}
          clearable
        />
      </div>
      </DemoSection>

      <DemoDocumentation
        importCode={autocompleteDocs.importCode}
        usageCode={autocompleteDocs.usageCode}
        props={autocompleteDocs.props}
      />
    </section>
  );
}
