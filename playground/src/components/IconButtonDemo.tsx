import { IconButton, Typography } from "shivanya-ui";
import { CloseIcon } from "shivanya-ui/icons";

export default function IconButtonDemo() {
  return (
    <section>
      <Typography variant="h2">
        Icon Button
      </Typography>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 16,
        }}
      >
        <IconButton
          iconRotateOnHover
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          iconRotateOnHover
          variant="outline"
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          iconRotateOnHover
          variant="solid"
          aria-label="Close"
        >
          <CloseIcon color="white" />
        </IconButton>
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
        <IconButton
          size="xs"
          iconRotateOnHover
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          size="sm"
          iconRotateOnHover
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          size="md"
          iconRotateOnHover
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          size="lg"
          iconRotateOnHover
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          size="xl"
          iconRotateOnHover
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
      </div>
    </section>
  );
}