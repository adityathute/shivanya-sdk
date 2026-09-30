import { useState } from "react";

import {
  FileUpload,
  Typography,
  fileUploadDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function FileUploadDemo() {
  const [files, setFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);
  const [error, setError] = useState("");

  return (
    <section className="demo">
      <DemoHeader
        title={fileUploadDocs.name}
        description={fileUploadDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          Upload a single file.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            files={files}
            onChange={setFiles}
          />
        </div>
      </DemoSection>

      <DemoSection title="Image Upload">
        <Typography variant="bodySmall" color="secondary">
          Restrict uploads to image files.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            files={imageFiles}
            accept="image/*"
            onChange={setImageFiles}
          />
        </div>
      </DemoSection>

      <DemoSection title="Multiple Files">
        <Typography variant="bodySmall" color="secondary">
          Allow multiple files to be selected.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            files={files}
            multiple
            maxFiles={5}
            onChange={setFiles}
          />
        </div>
      </DemoSection>

      <DemoSection title="Image Preview">
        <Typography variant="bodySmall" color="secondary">
          Show previews for selected image files.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            files={previewFiles}
            accept="image/*"
            multiple
            preview
            onChange={setPreviewFiles}
          />
        </div>
      </DemoSection>

      <DemoSection title="File Size">
        <Typography variant="bodySmall" color="secondary">
          Restrict files by their size.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            multiple
            maxFileSize={1024 * 1024}
            minFileSize={1024}
            onChange={setFiles}
            onError={setError}
          />

          {error && (
            <Typography variant="bodySmall" color="secondary">
              {error}
            </Typography>
          )}
        </div>
      </DemoSection>

      <DemoSection title="Removable">
        <Typography variant="bodySmall" color="secondary">
          Allow selected files to be removed from the list.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            files={files}
            multiple
            removable
            onChange={setFiles}
          />
        </div>
      </DemoSection>

      <DemoSection title="Custom Content">
        <Typography variant="bodySmall" color="secondary">
          Replace the default upload instructions with custom content.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload
            files={files}
            onChange={setFiles}
          >
            <strong>Select your document</strong>
            <span>PDF, DOC, or DOCX files</span>
          </FileUpload>
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent file selection and drag-and-drop.
        </Typography>

        <div className="demo-section-content-fit">
          <FileUpload disabled />
        </div>
      </DemoSection>

      <DemoSection title="Documentation">
        <DemoDocumentation
          importCode={fileUploadDocs.importCode}
          usageCode={fileUploadDocs.usageCode}
          props={fileUploadDocs.props}
        />
      </DemoSection>
    </section>
  );
}