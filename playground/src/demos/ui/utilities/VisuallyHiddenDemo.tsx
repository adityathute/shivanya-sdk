import {
  Button,
  Typography,
  VisuallyHidden,
  visuallyHiddenDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function VisuallyHiddenDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={visuallyHiddenDocs.name}
        description={visuallyHiddenDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-section-content-fit">
          <Button aria-label="Search">
            <span aria-hidden="true">⌕</span>
            <VisuallyHidden>
              Search
            </VisuallyHidden>
          </Button>

          <Typography
            variant="bodySmall"
            color="secondary"
          >
            The text is available to assistive technology
            but is visually hidden.
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Elements">
        <div className="demo-visually-hidden-grid">
          {(
            ["span", "div", "p", "label"] as const
          ).map((element) => (
            <div
              key={element}
              className="demo-visually-hidden-card"
            >
              <Typography variant="bodySmall">
                Rendered as:{" "}
                <code>{element}</code>
              </Typography>

              <VisuallyHidden as={element}>
                Visually hidden content rendered as{" "}
                {element}.
              </VisuallyHidden>
            </div>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-visually-hidden-states">
          <div>
            <Typography
              variant="bodySmall"
              weight="semibold"
            >
              Default
            </Typography>

            <VisuallyHidden>
              Default hidden content
            </VisuallyHidden>
          </div>

          <div>
            <Typography
              variant="bodySmall"
              weight="semibold"
            >
              Visible
            </Typography>

            <VisuallyHidden state="visible">
              Visible content
            </VisuallyHidden>
          </div>

          <div>
            <Typography
              variant="bodySmall"
              weight="semibold"
            >
              Hidden
            </Typography>

            <VisuallyHidden state="hidden">
              Hidden content
            </VisuallyHidden>
          </div>

          <div>
            <Typography
              variant="bodySmall"
              weight="semibold"
            >
              Disabled
            </Typography>

            <VisuallyHidden disabled>
              Disabled visually hidden content
            </VisuallyHidden>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Accessible Icon Example">
        <div className="demo-section-content-fit">
          <Button aria-label="Delete item">
            <span aria-hidden="true">
              ×
            </span>

            <VisuallyHidden>
              Delete item
            </VisuallyHidden>
          </Button>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={visuallyHiddenDocs.importCode}
        usageCode={visuallyHiddenDocs.usageCode}
        props={visuallyHiddenDocs.props}
      />
    </section>
  );
}