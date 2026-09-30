export const fileUploadDocs = {
  name: "FileUpload",
  category: "Forms",
  description:
    "Accessible file selection and drag-and-drop upload surface.",
  importCode:
    'import { FileUpload } from "shivanya-ui";',
  usageCode:
    '<FileUpload accept="image/*" multiple onChange={setFiles} />',
  props: [
    {
      name: "files",
      type: "File[]",
      defaultValue: "[]",
      description: "Files currently displayed in the upload list.",
    },
    {
      name: "accept",
      type: "string",
      defaultValue: '"*/*"',
      description: "Accepted file types.",
    },
    {
      name: "multiple",
      type: "boolean",
      defaultValue: "false",
      description: "Allows multiple files to be selected.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables file selection and drag-and-drop.",
    },
    {
      name: "maxFiles",
      type: "number",
      defaultValue: "multiple ? 10 : 1",
      description: "Maximum number of files accepted from one selection.",
    },
    {
      name: "maxFileSize",
      type: "number",
      defaultValue: "5242880",
      description: "Maximum allowed file size in bytes.",
    },
    {
      name: "minFileSize",
      type: "number",
      defaultValue: "0",
      description: "Minimum allowed file size in bytes.",
    },
    {
      name: "preview",
      type: "boolean",
      defaultValue: "false",
      description: "Shows previews for image files.",
    },
    {
      name: "removable",
      type: "boolean",
      defaultValue: "true",
      description: "Allows individual selected files to be removed.",
    },
    {
      name: "children",
      type: "ReactNode",
      defaultValue: "undefined",
      description: "Custom content displayed inside the upload area.",
    },
    {
      name: "onChange",
      type: "(files: File[]) => void",
      defaultValue: "undefined",
      description: "Called when files are selected or removed.",
    },
    {
      name: "onError",
      type: "(message: string) => void",
      defaultValue: "undefined",
      description: "Called when a selected file fails validation.",
    },
  ],
} as const;