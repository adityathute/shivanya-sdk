"use client";

import { useState } from "react";
import {
  MAX_FILE_SIZE,
  getFileSizeError,
  isFileSizeAllowed,
  isImageFile,
} from "shivanya-core";

import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function FileUtilsDemo() {
  const [file, setFile] = useState<File | null>(null);

  const maxSizeMb = MAX_FILE_SIZE / (1024 * 1024);

  return (
    <section className="demo">
      <DemoHeader
        title="File utilities"
        description="Validates image files and file size limits."
      />

      <DemoSection title="Example">
        <div className="demo-form-stack">
          <div>
            <strong>Maximum file size</strong>
            <p>{maxSizeMb} MB</p>
          </div>

          <label>
            Select file
            <input
              className="demo-native-input demo-file-input"
              type="file"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            />
          </label>

          {file && (
            <div className="demo-form-stack">
              <div>
                <strong>File</strong>
                <p>{file.name}</p>
              </div>

              <div>
                <strong>Type</strong>
                <p>{file.type || "Unknown"}</p>
              </div>

              <div>
                <strong>Size</strong>
                <p>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>

              <div>
                <strong>isImageFile</strong>
                <p>{isImageFile(file) ? "true" : "false"}</p>
              </div>

              <div>
                <strong>isFileSizeAllowed</strong>
                <p>{isFileSizeAllowed(file) ? "true" : "false"}</p>
              </div>

              <div>
                <strong>getFileSizeError</strong>
                <p>{getFileSizeError(file) ?? "No error"}</p>
              </div>
            </div>
          )}
        </div>
      </DemoSection>
    </section>
  );
}
