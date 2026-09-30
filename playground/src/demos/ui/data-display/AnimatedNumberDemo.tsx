import { useState } from "react";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";
import "./data-display-demo.css";

import {
  AnimatedNumber,
  Button,
  Typography,
  animatedNumberDocs,
} from "shivanya-ui";

export default function AnimatedNumberDemo() {
  const [value, setValue] = useState(1250);

  const increase = () => {
    setValue((current) => current + 250);
  };

  const decrease = () => {
    setValue((current) =>
      Math.max(0, current - 250),
    );
  };

  const reset = () => {
    setValue(1250);
  };

  return (
    <section className="demo">
      <DemoHeader
        title={animatedNumberDocs.name}
        description={animatedNumberDocs.description}
      />

      <DemoSection title="Basic">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Animated numeric value changes.
        </Typography>

        <div className="data-display-demo-box">
          <Typography variant="h2">
            <AnimatedNumber value={value} />
          </Typography>

          <div className="data-display-demo-actions">
            <Button onClick={decrease}>
              Decrease
            </Button>

            <Button onClick={increase}>
              Increase
            </Button>

            <Button
              variant="secondary"
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Currency">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Custom formatting can be used for prices and
          financial values.
        </Typography>

        <div className="data-display-demo-box">
          <Typography variant="h2">
            <AnimatedNumber
              value={value}
              format={(number) =>
                `₹${number.toLocaleString("en-IN")}`
              }
            />
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Percentage">
        <div className="data-display-demo-box">
          <Typography variant="h2">
            <AnimatedNumber
              value={78.5}
              format={(number) =>
                `${number.toFixed(1)}%`
              }
              duration={1000}
              animateOnMount
            />
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Large Number">
        <div className="data-display-demo-box">
          <Typography variant="h2">
            <AnimatedNumber
              value={1250000}
              format={(number) =>
                number.toLocaleString("en-IN")
              }
            />
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Animate On Mount">
        <Typography
          variant="bodySmall"
          color="secondary"
        >
          Starts at zero and animates to the target value
          when mounted.
        </Typography>

        <div className="data-display-demo-box">
          <Typography variant="h2">
            <AnimatedNumber
              value={5000}
              duration={1200}
              animateOnMount
            />
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Custom Duration">
        <div className="data-display-demo-box">
          <Typography variant="h2">
            <AnimatedNumber
              value={10000}
              duration={2000}
              animateOnMount
            />
          </Typography>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={animatedNumberDocs.importCode}
        usageCode={animatedNumberDocs.usageCode}
        props={animatedNumberDocs.props}
      />
    </section>
  );
}