"use client";

import { useState } from "react";
import { stripUrlProtocol } from "shivanya-core";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function StripUrlProtocolDemo() {
  const [value, setValue] = useState("https://shivanyams.com");

  return (
    <section className="demo">
      <DemoHeader
        title="stripUrlProtocol"
        description="Removes the HTTP or HTTPS protocol from a URL."
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
            <p>{stripUrlProtocol(value)}</p>
          </div>
        </div>
      </DemoSection>
    </section>
  );
}