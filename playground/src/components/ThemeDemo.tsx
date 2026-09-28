import { Button, Typography } from "shivanya-ui";

export default function ThemeDemo() {
  const setTheme = (theme: "light" | "dark") => {
    document.documentElement.dataset.theme = theme;
  };

  return (
    <section>
      <Typography variant="h2">
        Theme
      </Typography>

      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 16,
        }}
      >
        <Button
          variant="outline"
          onClick={() => setTheme("light")}
        >
          Light
        </Button>

        <Button
          variant="outline"
          onClick={() => setTheme("dark")}
        >
          Dark
        </Button>
      </div>
    </section>
  );
}