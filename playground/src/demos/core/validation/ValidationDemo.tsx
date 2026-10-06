"use client";

import { useState } from "react";
import {
  isLengthBetween,
  isRequired,
  isValidEmail,
  isValidUrl,
  isValidUsername,
} from "shivanya-core";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function ValidationDemo() {
  const [email, setEmail] = useState("aditya@example.com");
  const [required, setRequired] = useState("Hello ShivanyaMS");
  const [lengthValue, setLengthValue] = useState("Shivanya");
  const [url, setUrl] = useState("https://shivanyams.com");
  const [username, setUsername] = useState("aditya_123");

  return (
    <section className="demo">
      <DemoHeader
        title="Validation utilities"
        description="Validates common strings, lengths, email addresses, URLs, and usernames."
      />

      <DemoSection title="isValidEmail">
        <div className="demo-form-stack">
          <label>
            Email
            <input
              className="demo-native-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <p>{isValidEmail(email) ? "Valid email" : "Invalid email"}</p>
        </div>
      </DemoSection>

      <DemoSection title="isRequired">
        <div className="demo-form-stack">
          <label>
            Value
            <input
              className="demo-native-input"
              value={required}
              onChange={(event) => setRequired(event.target.value)}
            />
          </label>

          <p>
            {isRequired(required) ? "Value is required" : "Value is empty"}
          </p>
        </div>
      </DemoSection>

      <DemoSection title="isLengthBetween">
        <div className="demo-form-stack">
          <label>
            Value
            <input
              className="demo-native-input"
              value={lengthValue}
              onChange={(event) => setLengthValue(event.target.value)}
            />
          </label>

          <p>
            {isLengthBetween(lengthValue, 3, 20)
              ? "Length is between 3 and 20"
              : "Length is outside 3 to 20"}
          </p>
        </div>
      </DemoSection>

      <DemoSection title="isValidUrl">
        <div className="demo-form-stack">
          <label>
            URL
            <input
              className="demo-native-input"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </label>

          <p>{isValidUrl(url) ? "Valid URL" : "Invalid URL"}</p>
        </div>
      </DemoSection>

      <DemoSection title="isValidUsername">
        <div className="demo-form-stack">
          <label>
            Username
            <input
              className="demo-native-input"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <p>
            {isValidUsername(username)
              ? "Valid username"
              : "Invalid username"}
          </p>
        </div>
      </DemoSection>
    </section>
  );
}