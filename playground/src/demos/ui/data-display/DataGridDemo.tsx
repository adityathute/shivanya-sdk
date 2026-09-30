import { useMemo, useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  Chip,
  DataGrid,
  Typography,
  dataGridDocs,
} from "shivanya-ui";

interface User extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  amount: number;
}

const rows: User[] = [
  {
    id: 1,
    name: "Aditya",
    email: "aditya@example.com",
    role: "Developer",
    status: "Active",
    amount: 12500,
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@example.com",
    role: "Designer",
    status: "Pending",
    amount: 9800,
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@example.com",
    role: "Manager",
    status: "Active",
    amount: 15600,
  },
  {
    id: 4,
    name: "Sneha",
    email: "sneha@example.com",
    role: "Developer",
    status: "Inactive",
    amount: 8700,
  },
];

const columns = [
  {
    key: "name",
    title: "Name",
    field: "name",
    sortable: true,
  },
  {
    key: "email",
    title: "Email",
    field: "email",
    sortable: true,
  },
  {
    key: "role",
    title: "Role",
    field: "role",
    sortable: true,
  },
  {
    key: "status",
    title: "Status",
    field: "status",
    sortable: true,
    render: (value: unknown) => (
      <Chip
        size="sm"
        variant="soft"
        color={
          value === "Active"
            ? "success"
            : value === "Pending"
              ? "warning"
              : "secondary"
        }
      >
        {String(value)}
      </Chip>
    ),
  },
  {
    key: "amount",
    title: "Amount",
    field: "amount",
    sortable: true,
    align: "right" as const,
    render: (value: unknown) =>
      `₹${Number(value).toLocaleString("en-IN")}`,
  },
];

export default function DataGridDemo() {
  const [selectedRows, setSelectedRows] =
    useState<Array<string | number>>([]);

  const [clickedRow, setClickedRow] =
    useState("None");

  const manyRows = useMemo<User[]>(
    () =>
      Array.from(
        { length: 20 },
        (_, index) => {
          const source =
            rows[index % rows.length];

          return {
            ...source,
            id: index + 1,
            name: `${source.name} ${index + 1}`,
          };
        },
      ),
    [],
  );

  return (
    <section className="demo">
      <DemoHeader
        title={dataGridDocs.name}
        description={dataGridDocs.description}
      />

      <DemoSection title="Basic">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            A configurable table for structured data.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sorting">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Click sortable column headers to change the sort direction.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              sortable
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Selection">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Select individual rows or use the header checkbox to select
            all rows.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              selectable
              selectedRowKeys={selectedRows}
              onSelectedRowKeysChange={
                setSelectedRows
              }
            />
          </div>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Selected:{" "}
            {selectedRows.length > 0
              ? selectedRows.join(", ")
              : "None"}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Striped">
        <div className="data-display-demo-data-grid">
          <DataGrid<User>
            columns={columns}
            data={rows}
            striped
          />
        </div>
      </DemoSection>

      <DemoSection title="Hoverable">
        <div className="data-display-demo-data-grid">
          <DataGrid<User>
            columns={columns}
            data={rows}
            hoverable
          />
        </div>
      </DemoSection>

      <DemoSection title="Sticky Header">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            The header stays visible while the grid content scrolls.
          </Typography>

          <div className="data-display-demo-data-grid data-display-demo-data-grid-scroll">
            <DataGrid<User>
              columns={columns}
              data={manyRows}
              stickyHeader
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Available density sizes.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              size="sm"
            />
          </div>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              size="md"
            />
          </div>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              size="lg"
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Loading">
        <div className="data-display-demo-data-grid">
          <DataGrid<User>
            columns={columns}
            data={[]}
            loading
            loadingRows={4}
          />
        </div>
      </DemoSection>

      <DemoSection title="Empty">
        <div className="data-display-demo-data-grid">
          <DataGrid<User>
            columns={columns}
            data={[]}
            emptyMessage="There are no users to display."
          />
        </div>
      </DemoSection>

      <DemoSection title="Row Click">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Rows can be made interactive with onRowClick.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              onRowClick={(row) =>
                setClickedRow(row.name)
              }
            />
          </div>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Last clicked: {clickedRow}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Custom Rendering">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Columns can render custom React content.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
            />
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="data-display-demo-stack">
          <Typography
            variant="bodySmall"
            color="secondary"
          >
            Combine sorting, selection, custom rendering, and row
            interaction.
          </Typography>

          <div className="data-display-demo-data-grid">
            <DataGrid<User>
              columns={columns}
              data={rows}
              sortable
              selectable
              selectedRowKeys={selectedRows}
              onSelectedRowKeysChange={
                setSelectedRows
              }
              onRowClick={(row) =>
                setClickedRow(row.name)
              }
            />
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={dataGridDocs.importCode}
        usageCode={dataGridDocs.usageCode}
        props={dataGridDocs.props}
      />
    </section>
  );
}