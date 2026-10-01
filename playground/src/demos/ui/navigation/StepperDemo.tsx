import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./navigation-demo.css";

import { useState } from "react";
import { Stepper } from "shivanya-ui";

const docs = {
  importCode: `import { Stepper } from "shivanya-ui";`,
  usageCode: `<Stepper activeStep={1}>
  <Stepper.Step
    title="Account"
    description="Create account"
  />
  <Stepper.Step
    title="Profile"
    description="Add details"
  />
  <Stepper.Step
    title="Preferences"
    description="Choose options"
  />
  <Stepper.Step
    title="Finish"
    description="Complete setup"
  />
</Stepper>`,
  props: [
    {
      name: "activeStep",
      type: "number",
      default: "0",
    },
    {
      name: "orientation",
      type: "horizontal | vertical",
      default: "horizontal",
    },
    {
      name: "size",
      type: "sm | md | lg",
      default: "md",
    },
    {
      name: "color",
      type: "primary | secondary | success | warning | danger | info",
      default: "primary",
    },
    {
      name: "clickable",
      type: "boolean",
      default: "false",
    },
    {
      name: "onStepChange",
      type: "(step: number) => void",
      default: "undefined",
    },
  ],
};

function createSteps() {
  return [
    <Stepper.Step
      key="account"
      title="Account"
      description="Create your account"
    />,
    <Stepper.Step
      key="profile"
      title="Profile"
      description="Add your profile"
    />,
    <Stepper.Step
      key="preferences"
      title="Preferences"
      description="Choose options"
    />,
    <Stepper.Step
      key="finish"
      title="Finish"
      description="Complete setup"
    />,
  ];
}

export default function StepperDemo() {
  const [active, setActive] = useState(1);

  return (
    <section className="demo">
      <DemoHeader
        title="Stepper"
        description="Shows progress through a multi-step process."
      />

      <DemoSection title="Basic">
        <Stepper activeStep={1}>
          {createSteps()}
        </Stepper>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="navigation-demo-grid navigation-demo-grid-3">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div
              className="navigation-demo-card"
              key={size}
            >
              <span className="navigation-demo-label">
                {size.toUpperCase()}
              </span>

              <Stepper
                size={size}
                activeStep={1}
              >
                {createSteps()}
              </Stepper>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Orientation">
        <div className="navigation-demo-grid navigation-demo-grid-2">
          <div className="navigation-demo-card">
            <span className="navigation-demo-label">
              HORIZONTAL
            </span>

            <Stepper activeStep={2}>
              {createSteps()}
            </Stepper>
          </div>

          <div className="navigation-demo-card">
            <span className="navigation-demo-label">
              VERTICAL
            </span>

            <Stepper
              orientation="vertical"
              activeStep={2}
            >
              {createSteps()}
            </Stepper>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Colors">
        <div className="navigation-demo-grid navigation-demo-grid-3">
          {(
            [
              "primary",
              "secondary",
              "success",
              "warning",
              "danger",
              "info",
            ] as const
          ).map((color) => (
            <div
              className="navigation-demo-card"
              key={color}
            >
              <span className="navigation-demo-label">
                {color.toUpperCase()}
              </span>

              <Stepper
                color={color}
                activeStep={1}
              >
                {createSteps()}
              </Stepper>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Progress States">
        <div className="navigation-demo-grid navigation-demo-grid-2">
          {[0, 1, 2, 3].map((step) => (
            <div
              className="navigation-demo-card"
              key={step}
            >
              <span className="navigation-demo-label">
                ACTIVE STEP {step + 1}
              </span>

              <Stepper activeStep={step}>
                {createSteps()}
              </Stepper>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="Interactive">
        <Stepper
          activeStep={active}
          clickable
          onStepChange={setActive}
        >
          {createSteps()}
        </Stepper>

        <span className="navigation-demo-note">
          Active step: {active + 1}
        </span>
      </DemoSection>

      <DemoDocumentation
        importCode={docs.importCode}
        usageCode={docs.usageCode}
        props={docs.props}
      />
    </section>
  );
}