import { useState } from "react";

import { NumberInput, Typography, numberInputDocs } from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function NumberInputDemo() {
  const [controlledValue, setControlledValue] = useState<number | "">(25);

  const [uncontrolledValue, setUncontrolledValue] = useState<number | "">(10);

  return (
    <section className="demo">
      <DemoHeader
        title={numberInputDocs.name}
        description={numberInputDocs.description}
      />

      <DemoSection title="Basic">
        <Typography variant="bodySmall" color="secondary">
          A numeric input with increment and decrement controls.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={10} />
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <Typography variant="bodySmall" color="secondary">
          Available number input sizes.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput size="sm" defaultValue={10} />
          <NumberInput size="md" defaultValue={20} />
          <NumberInput size="lg" defaultValue={30} />
        </div>
      </DemoSection>

      <DemoSection title="Controlled">
        <Typography variant="bodySmall" color="secondary">
          Control the numeric value from React state.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput value={controlledValue} onChange={setControlledValue} />

          <Typography variant="bodySmall" color="secondary">
            Current value: {controlledValue}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Uncontrolled">
        <Typography variant="bodySmall" color="secondary">
          Use an initial value without controlling the input.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={10} onChange={setUncontrolledValue} />

          <Typography variant="bodySmall" color="secondary">
            Last changed value: {uncontrolledValue}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Min and Max">
        <Typography variant="bodySmall" color="secondary">
          Constrain the value between minimum and maximum limits.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={50} min={0} max={100} />
        </div>
      </DemoSection>

      <DemoSection title="Step">
        <Typography variant="bodySmall" color="secondary">
          Change the increment and decrement amount.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={10} min={0} max={100} step={5} />
        </div>
      </DemoSection>

      <DemoSection title="Prefix">
        <Typography variant="bodySmall" color="secondary">
          Display text before the numeric value.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={500} prefix="₹" />
        </div>
      </DemoSection>

      <DemoSection title="Suffix">
        <Typography variant="bodySmall" color="secondary">
          Display text after the numeric value.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={50} suffix="%" />
        </div>
      </DemoSection>

      <DemoSection title="Prefix and Suffix">
        <Typography variant="bodySmall" color="secondary">
          Use both prefix and suffix content.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput defaultValue={500} prefix="₹" suffix="INR" />
        </div>
      </DemoSection>

      <DemoSection title="Disabled">
        <Typography variant="bodySmall" color="secondary">
          Prevent changes to the numeric value.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput value={25} disabled />
        </div>
      </DemoSection>

      <DemoSection title="Read Only">
        <Typography variant="bodySmall" color="secondary">
          Display the value without allowing changes.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput value={25} readOnly />
        </div>
      </DemoSection>

      <DemoSection title="Empty Value">
        <Typography variant="bodySmall" color="secondary">
          NumberInput can also represent an empty value.
        </Typography>

        <div className="demo-section-content-fit">
          <NumberInput value="" onChange={setControlledValue} />
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={numberInputDocs.importCode}
        usageCode={numberInputDocs.usageCode}
        props={numberInputDocs.props}
      />
    </section>
  );
}
