import { Button, Typography } from "shivanya-ui";

export default function ButtonDemo() {
  return (
    <section>
      <Typography variant="h2">
        Button
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 16,
        }}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="link">Link</Button>

        <Button variant="dark">Dark</Button>
        <Button variant="light">Light</Button>
        <Button variant="neutral">Neutral</Button>

        <Button variant="soft-primary">
          Soft Primary
        </Button>

        <Button variant="soft-secondary">
          Soft Secondary
        </Button>

        <Button variant="soft-success">
          Soft Success
        </Button>

        <Button variant="soft-warning">
          Soft Warning
        </Button>

        <Button variant="soft-danger">
          Soft Danger
        </Button>

        <Button variant="soft-info">
          Soft Info
        </Button>
      </div>

      <div style={{ marginTop: 32 }}>
        <Typography variant="h3">
          Sizes
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 16,
        }}
      >
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>

      <div style={{ marginTop: 32 }}>
        <Typography variant="h3">
          States
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 16,
        }}
      >
        <Button loading>
          Loading
        </Button>

        <Button
          loading
          loadingText="Saving..."
        >
          Save
        </Button>

        <Button
          loading
          loadingText="Loading..."
          loadingPosition="after"
        >
          Continue
        </Button>

        <Button disabled>
          Disabled
        </Button>

        <Button rounded>
          Rounded
        </Button>
      </div>

      <div style={{ marginTop: 16 }}>
        <Button fullWidth>
          Full Width
        </Button>
      </div>
    </section>
  );
}