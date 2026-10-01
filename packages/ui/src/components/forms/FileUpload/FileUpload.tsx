"use client";
import { useRef, useState } from "react";
import { CloseIcon } from "../../../icons";
import type { FileUploadProps } from "./FileUpload.types";
const size = (n: number) => {
  if (!n) return "0 Bytes";
  const u = ["Bytes", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(n) / Math.log(1024)), u.length - 1);
  return `${(n / 1024 ** i).toFixed(2)} ${u[i]}`;
};
export function FileUpload({
  files = [],
  accept = "*/*",
  multiple = false,
  disabled = false,
  maxFiles = multiple ? 10 : 1,
  maxFileSize = 5 * 1024 * 1024,
  minFileSize = 0,
  preview = false,
  removable = true,
  className,
  children,
  onChange,
  onError,
}: FileUploadProps) {
  const input = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const select = (list: FileList | File[]) => {
    const selected = Array.from(list).slice(0, maxFiles);
    for (const f of selected) {
      if (f.size > maxFileSize) return onError?.("File is too large.");
      if (f.size < minFileSize) return onError?.("File is too small.");
    }
    onChange?.(selected);
  };
  return (
    <div
      className={[
        "shivanya-file-upload",
        drag ? "is-drag" : "",
        disabled ? "is-disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setDrag(true);
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDrag(false);
        if (!disabled) select(e.dataTransfer.files);
      }}
    >
      <button
        type="button"
        className="shivanya-file-dropzone"
        onClick={() => input.current?.click()}
        disabled={disabled}
      >
        {children ?? (
          <>
            <strong>Click to upload</strong>
            <span>or drag and drop files here</span>
          </>
        )}
        <input
          ref={input}
          hidden
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => e.target.files && select(e.target.files)}
        />
      </button>
      {files.length > 0 && (
        <div className="shivanya-file-list">
          {files.map((f, i) => (
            <div className="shivanya-file-item" key={`${f.name}-${i}`}>
              {preview && f.type.startsWith("image/") && (
                <img src={URL.createObjectURL(f)} alt="" />
              )}
              <span>
                <strong>{f.name}</strong>
                <small>{size(f.size)}</small>
              </span>
              {removable && (
                <button
                  type="button"
                  onClick={() => onChange?.(files.filter((_, n) => n !== i))}
                  aria-label={`Remove ${f.name}`}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

