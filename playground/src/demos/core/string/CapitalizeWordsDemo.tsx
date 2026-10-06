"use client";

import { useState } from "react";
import { capitalizeWords } from "shivanya-core";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function CapitalizeWordsDemo() {
  const [value, setValue] = useState("aditya thute");

  return (
    <section className="demo">
      <DemoHeader
        title="capitalizeWords"
        description="Capitalizes the first character of every word."
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
            <p>{capitalizeWords(value)}</p>
          </div>
        </div>
      </DemoSection>
    </section>
  );
}