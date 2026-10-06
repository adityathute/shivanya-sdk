"use client";

import { useState } from "react";
import { normalizeUrl } from "shivanya-core";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function NormalizeUrlDemo() {
  const [value, setValue] = useState("shivanyams.com");

  return (
    <section className="demo">
      <DemoHeader
        title="normalizeUrl"
        description="Normalizes a URL by trimming it and adding HTTPS."
      />

      <DemoSection title="Example">
        <div className="demo-form-stack">
          <label>
            Input
            <input
              className="demo-native-input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>

          <div>
            <strong>Result</strong>
            <p>{normalizeUrl(value)}</p>
          </div>
        </div>
      </DemoSection>
    </section>
  );
}