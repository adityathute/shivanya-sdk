import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import { Table, tableDocs } from "shivanya-ui";

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    category: "Electronics",
    price: "$1,200",
    status: "Available",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "Accessories",
    price: "$30",
    status: "Available",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: "$90",
    status: "Low Stock",
  },
  {
    id: 4,
    name: "4K Monitor",
    category: "Electronics",
    price: "$450",
    status: "Available",
  },
];

const employees = [
  {
    id: 1,
    name: "John",
    department: "Sales",
    location: "Mumbai",
    status: "Active",
  },
  {
    id: 2,
    name: "Emma",
    department: "Support",
    location: "Pune",
    status: "Active",
  },
  {
    id: 3,
    name: "David",
    department: "HR",
    location: "Delhi",
    status: "Away",
  },
  {
    id: 4,
    name: "Sophia",
    department: "Engineering",
    location: "Bangalore",
    status: "Active",
  },
];

export default function TableDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={tableDocs.name}
        description={tableDocs.description}
      />

      {/* Basic */}

      <DemoSection title="Basic">
        <div className="data-display-demo-table">
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Product
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Category
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Price
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {products.map((product) => (
                <Table.Row key={product.id}>
                  <Table.Cell>
                    {product.name}
                  </Table.Cell>

                  <Table.Cell>
                    {product.category}
                  </Table.Cell>

                  <Table.Cell>
                    {product.price}
                  </Table.Cell>

                  <Table.Cell>
                    {product.status}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Variants */}

      <DemoSection title="Variants">
        <div className="data-display-demo-table-grid">
          <div className="data-display-demo-table-card">
            <span className="data-display-demo-label">
              Default
            </span>

            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Name
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Aditya
                  </Table.Cell>

                  <Table.Cell>
                    Active
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Rahul
                  </Table.Cell>

                  <Table.Cell>
                    Active
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>

          <div className="data-display-demo-table-card">
            <span className="data-display-demo-label">
              Bordered
            </span>

            <Table variant="bordered">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Name
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Aditya
                  </Table.Cell>

                  <Table.Cell>
                    Active
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Rahul
                  </Table.Cell>

                  <Table.Cell>
                    Active
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>

          <div className="data-display-demo-table-card">
            <span className="data-display-demo-label">
              Filled
            </span>

            <Table variant="filled">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Name
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Aditya
                  </Table.Cell>

                  <Table.Cell>
                    Active
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Rahul
                  </Table.Cell>

                  <Table.Cell>
                    Active
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </DemoSection>

      {/* Sizes */}

      <DemoSection title="Sizes">
        <div className="data-display-demo-table-stack">
          <div className="data-display-demo-table-example">
            <span className="data-display-demo-label">
              Small
            </span>

            <Table size="sm">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Product
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Price
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Laptop
                  </Table.Cell>

                  <Table.Cell>
                    $1,200
                  </Table.Cell>

                  <Table.Cell>
                    Available
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Mouse
                  </Table.Cell>

                  <Table.Cell>
                    $30
                  </Table.Cell>

                  <Table.Cell>
                    Available
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>

          <div className="data-display-demo-table-example">
            <span className="data-display-demo-label">
              Medium
            </span>

            <Table size="md">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Product
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Price
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Laptop
                  </Table.Cell>

                  <Table.Cell>
                    $1,200
                  </Table.Cell>

                  <Table.Cell>
                    Available
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Mouse
                  </Table.Cell>

                  <Table.Cell>
                    $30
                  </Table.Cell>

                  <Table.Cell>
                    Available
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>

          <div className="data-display-demo-table-example">
            <span className="data-display-demo-label">
              Large
            </span>

            <Table size="lg">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Product
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Price
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    Laptop
                  </Table.Cell>

                  <Table.Cell>
                    $1,200
                  </Table.Cell>

                  <Table.Cell>
                    Available
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Mouse
                  </Table.Cell>

                  <Table.Cell>
                    $30
                  </Table.Cell>

                  <Table.Cell>
                    Available
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </DemoSection>

      {/* Density */}

      <DemoSection title="Density">
        <div className="data-display-demo-table-grid">
          <div className="data-display-demo-table-card">
            <span className="data-display-demo-label">
              Comfortable
            </span>

            <Table density="comfortable">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Code
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    ORD001
                  </Table.Cell>

                  <Table.Cell>
                    Completed
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    ORD002
                  </Table.Cell>

                  <Table.Cell>
                    Pending
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>

          <div className="data-display-demo-table-card">
            <span className="data-display-demo-label">
              Compact
            </span>

            <Table density="compact">
              <Table.Head>
                <Table.Row>
                  <Table.HeaderCell>
                    Code
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                    Status
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Head>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    ORD001
                  </Table.Cell>

                  <Table.Cell>
                    Completed
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    ORD002
                  </Table.Cell>

                  <Table.Cell>
                    Pending
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </DemoSection>

      {/* Hover */}

      <DemoSection title="Hover">
        <div className="data-display-demo-table">
          <Table hover>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Employee
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Department
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Location
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {employees.map((employee) => (
                <Table.Row key={employee.id}>
                  <Table.Cell>
                    {employee.name}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.department}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.location}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.status}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Striped */}

      <DemoSection title="Striped">
        <div className="data-display-demo-table">
          <Table striped>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Employee
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Department
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Location
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {employees.map((employee) => (
                <Table.Row key={employee.id}>
                  <Table.Cell>
                    {employee.name}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.department}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.location}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.status}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Striped + Hover */}

      <DemoSection title="Striped and Hover">
        <div className="data-display-demo-table">
          <Table
            striped
            hover
            variant="bordered"
          >
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Employee
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Department
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Location
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {employees.map((employee) => (
                <Table.Row key={employee.id}>
                  <Table.Cell>
                    {employee.name}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.department}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.location}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.status}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Selected */}

      <DemoSection title="Selected Rows">
        <div className="data-display-demo-table">
          <Table variant="bordered">
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Employee
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Department
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              <Table.Row selected>
                <Table.Cell>
                  Aditya
                </Table.Cell>

                <Table.Cell>
                  Engineering
                </Table.Cell>

                <Table.Cell>
                  Active
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Rahul
                </Table.Cell>

                <Table.Cell>
                  Sales
                </Table.Cell>

                <Table.Cell>
                  Active
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Priya
                </Table.Cell>

                <Table.Cell>
                  Support
                </Table.Cell>

                <Table.Cell>
                  Away
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Alignment */}

      <DemoSection title="Cell Alignment">
        <div className="data-display-demo-table">
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Product
                </Table.HeaderCell>

                <Table.HeaderCell
                  style={{
                    textAlign: "center",
                  }}
                >
                  Quantity
                </Table.HeaderCell>

                <Table.HeaderCell
                  style={{
                    textAlign: "right",
                  }}
                >
                  Price
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Laptop
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "center",
                  }}
                >
                  2
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  $2,400
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Monitor
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "center",
                  }}
                >
                  4
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  $1,800
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Footer */}

      <DemoSection title="Footer">
        <div className="data-display-demo-table">
          <Table variant="bordered">
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Product
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Quantity
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Price
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Laptop
                </Table.Cell>

                <Table.Cell>
                  2
                </Table.Cell>

                <Table.Cell>
                  $2,400
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Monitor
                </Table.Cell>

                <Table.Cell>
                  4
                </Table.Cell>

                <Table.Cell>
                  $1,800
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Keyboard
                </Table.Cell>

                <Table.Cell>
                  3
                </Table.Cell>

                <Table.Cell>
                  $270
                </Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.Cell>
                  Total
                </Table.Cell>

                <Table.Cell>
                  9
                </Table.Cell>

                <Table.Cell>
                  $4,470
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </DemoSection>

      {/* Sticky Header */}

      <DemoSection title="Sticky Header">
        <div className="data-display-demo-table-scroll">
          <Table
            stickyHeader
            maxHeight={280}
            variant="bordered"
          >
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Employee
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Department
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Location
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {Array.from(
                { length: 12 },
                (_, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      Employee {index + 1}
                    </Table.Cell>

                    <Table.Cell>
                      Engineering
                    </Table.Cell>

                    <Table.Cell>
                      India
                    </Table.Cell>

                    <Table.Cell>
                      Active
                    </Table.Cell>
                  </Table.Row>
                ),
              )}
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Responsive */}

      <DemoSection title="Responsive">
        <div className="data-display-demo-table-responsive">
          <Table
            responsive
            variant="bordered"
          >
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Employee
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Department
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Location
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Email
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Joined
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              {employees.map((employee) => (
                <Table.Row key={employee.id}>
                  <Table.Cell>
                    {employee.name}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.department}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.location}
                  </Table.Cell>

                  <Table.Cell>
                    {employee.name.toLowerCase()}
                    @example.com
                  </Table.Cell>

                  <Table.Cell>
                    {employee.status}
                  </Table.Cell>

                  <Table.Cell>
                    2026
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Loading */}

      <DemoSection title="Loading">
        <div className="data-display-demo-table">
          <Table
            loading
            variant="bordered"
          >
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Product
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Category
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Price
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Loading product...
                </Table.Cell>

                <Table.Cell>
                  Loading...
                </Table.Cell>

                <Table.Cell>
                  Loading...
                </Table.Cell>

                <Table.Cell>
                  Loading...
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Loading product...
                </Table.Cell>

                <Table.Cell>
                  Loading...
                </Table.Cell>

                <Table.Cell>
                  Loading...
                </Table.Cell>

                <Table.Cell>
                  Loading...
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Disabled */}

      <DemoSection title="Disabled">
        <div className="data-display-demo-table">
          <Table
            disabled
            variant="bordered"
          >
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Product
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Price
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  Laptop
                </Table.Cell>

                <Table.Cell>
                  $1,200
                </Table.Cell>

                <Table.Cell>
                  Available
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Monitor
                </Table.Cell>

                <Table.Cell>
                  $450
                </Table.Cell>

                <Table.Cell>
                  Available
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </DemoSection>

      {/* Combined */}

      <DemoSection title="Combined">
        <div className="data-display-demo-table">
          <Table
            size="md"
            variant="bordered"
            density="comfortable"
            striped
            hover
            responsive
          >
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>
                  Product
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Category
                </Table.HeaderCell>

                <Table.HeaderCell
                  style={{
                    textAlign: "right",
                  }}
                >
                  Price
                </Table.HeaderCell>

                <Table.HeaderCell>
                  Status
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>

            <Table.Body>
              <Table.Row selected>
                <Table.Cell>
                  Laptop Pro
                </Table.Cell>

                <Table.Cell>
                  Electronics
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  $1,200
                </Table.Cell>

                <Table.Cell>
                  Available
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Wireless Mouse
                </Table.Cell>

                <Table.Cell>
                  Accessories
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  $30
                </Table.Cell>

                <Table.Cell>
                  Available
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  Mechanical Keyboard
                </Table.Cell>

                <Table.Cell>
                  Accessories
                </Table.Cell>

                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  $90
                </Table.Cell>

                <Table.Cell>
                  Low Stock
                </Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.Cell>
                  Total
                </Table.Cell>

                <Table.Cell />

                <Table.Cell
                  style={{
                    textAlign: "right",
                  }}
                >
                  $1,320
                </Table.Cell>

                <Table.Cell>
                  3 items
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={tableDocs.importCode}
        usageCode={tableDocs.usageCode}
        props={tableDocs.props}
      />
    </section>
  );
}