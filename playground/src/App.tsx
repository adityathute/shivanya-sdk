import { Typography } from "shivanya-ui";

import ButtonDemo from "./components/ButtonDemo";
import IconButtonDemo from "./components/IconButtonDemo";
import ThemeDemo from "./components/ThemeDemo";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Typography variant="h1">
        Shivanya SDK Playground
      </Typography>

      <Typography>
        Test and preview SDK components.
      </Typography>

      <div style={{ marginTop: 40 }}>
        <ThemeDemo />
      </div>

      <div style={{ marginTop: 40 }}>
        <ButtonDemo />
      </div>

      <div style={{ marginTop: 40 }}>
        <IconButtonDemo />
      </div>
    </div>
  );
}

export default App;