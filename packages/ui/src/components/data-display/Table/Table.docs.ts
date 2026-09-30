export const tableDocs = {
  name: "Table",
  category: "Data Display",

  description:
    "Semantic table primitives with responsive behavior, density, borders, striping, hover states, selected rows, and sticky headers.",

  importCode:
    'import { Table } from "shivanya-ui";',

  usageCode: `<Table>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
    </Table.Row>
  </Table.Head>

  <Table.Body>
    <Table.Row>
      <Table.Cell>Aditya</Table.Cell>
      <Table.Cell>aditya@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`,

  props: [
    {
      name: "size",
      type: '"sm" | "md" | "lg"',
      defaultValue: '"md"',
      description:
        "Controls table text and cell sizing.",
    },
    {
      name: "variant",
      type:
        '"default" | "bordered" | "filled"',
      defaultValue: '"default"',
      description:
        "Controls the table visual treatment.",
    },
    {
      name: "density",
      type:
        '"comfortable" | "compact"',
      defaultValue: '"comfortable"',
      description:
        "Controls cell padding.",
    },
    {
      name: "hover",
      type: "boolean",
      defaultValue: "false",
      description:
        "Highlights rows when hovered.",
    },
    {
      name: "striped",
      type: "boolean",
      defaultValue: "false",
      description:
        "Adds alternating row backgrounds.",
    },
    {
      name: "stickyHeader",
      type: "boolean",
      defaultValue: "false",
      description:
        "Keeps the table header visible while scrolling.",
    },
    {
      name: "responsive",
      type: "boolean",
      defaultValue: "false",
      description:
        "Enables horizontal scrolling for wide tables.",
    },
    {
      name: "maxHeight",
      type: "number | string",
      defaultValue: "undefined",
      description:
        "Limits the table wrapper height and enables scrolling.",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description:
        "Dims the table and disables interaction.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description:
        "Disables the table visually and prevents interaction.",
    },
    {
      name: "emptyMessage",
      type: "ReactNode",
      defaultValue: "undefined",
      description:
        "Reserved content for empty table states.",
    },
  ],
} as const;