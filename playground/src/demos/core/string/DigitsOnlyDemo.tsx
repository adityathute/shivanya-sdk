"use client";

import { useState } from "react";
import { digitsOnly } from "shivanya-core";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function DigitsOnlyDemo() {
  const [value, setValue] = useState("987abc-123");

  return (
    <section className="demo">
      <DemoHeader
        title="digitsOnly"
        description="Removes all non-digit characters from a string."
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
            <p>{digitsOnly(value)}</p>
          </div>
        </div>
      </DemoSection>
    </section>
  );
}