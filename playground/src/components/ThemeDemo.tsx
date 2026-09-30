import { Button } from "shivanya-ui";

export default function ThemeDemo() {
  const setTheme = (theme: "light" | "dark") => {
    document.documentElement.dataset.theme = theme;
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
      }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setTheme("light")}
      >
        Light
      </Button>

      <Button
        variant="outline"
                size="sm"
        onClick={() => setTheme("dark")}
      >
        Dark
      </Button>
    </div>
  );
}