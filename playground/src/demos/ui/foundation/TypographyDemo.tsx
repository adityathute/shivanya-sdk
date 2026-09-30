import {
  Typography,
  typographyDocs,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function TypographyDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={typographyDocs.name}
        description={typographyDocs.description}
      />

      <DemoSection title="Variants">
        <div className="demo-section-content">
          <Typography variant="h1">
            Heading 1
          </Typography>

          <Typography variant="h2">
            Heading 2
          </Typography>

          <Typography variant="h3">
            Heading 3
          </Typography>

          <Typography variant="h4">
            Heading 4
          </Typography>

          <Typography variant="h5">
            Heading 5
          </Typography>

          <Typography variant="h6">
            Heading 6
          </Typography>

          <Typography variant="body">
            Body text
          </Typography>

          <Typography variant="bodySmall">
            Small body text
          </Typography>

          <Typography variant="bodyXSmall">
            Extra small body text
          </Typography>

          <Typography variant="caption">
            Caption text
          </Typography>

          <Typography variant="overline">
            Overline text
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Sizes">
        <div className="demo-section-content">
          <Typography size="xs">
            Extra Small
          </Typography>

          <Typography size="sm">
            Small
          </Typography>

          <Typography size="md">
            Medium
          </Typography>

          <Typography size="lg">
            Large
          </Typography>

          <Typography size="xl">
            Extra Large
          </Typography>

          <Typography size="2xl">
            2XL
          </Typography>

          <Typography size="3xl">
            3XL
          </Typography>

          <Typography size="4xl">
            4XL
          </Typography>

          <Typography size="5xl">
            5XL
          </Typography>

          <Typography size="hero">
            Hero
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Size Override">
        <div className="demo-section-content">
          <Typography variant="h1">
            H1 default size
          </Typography>

          <Typography
            variant="h1"
            size="xl"
          >
            H1 with XL size
          </Typography>

          <Typography
            variant="body"
            size="2xl"
          >
            Body with 2XL size
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Weights">
        <div className="demo-section-content">
          <Typography weight="regular">
            Regular weight
          </Typography>

          <Typography weight="medium">
            Medium weight
          </Typography>

          <Typography weight="semibold">
            Semibold weight
          </Typography>

          <Typography weight="bold">
            Bold weight
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Colors">
        <div className="demo-section-content">
          <Typography color="primary">
            Primary
          </Typography>

          <Typography color="secondary">
            Secondary
          </Typography>

          <Typography color="muted">
            Muted
          </Typography>

          <Typography color="success">
            Success
          </Typography>

          <Typography color="warning">
            Warning
          </Typography>

          <Typography color="danger">
            Danger
          </Typography>

          <Typography color="info">
            Info
          </Typography>

          <Typography color="inherit">
            Inherit
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Alignment">
        <div className="demo-section-content">
          <Typography align="left">
            Left aligned text
          </Typography>

          <Typography align="center">
            Center aligned text
          </Typography>

          <Typography align="right">
            Right aligned text
          </Typography>

          <Typography align="justify">
            Justified text with enough content to
            demonstrate the text alignment behavior.
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Transform">
        <div className="demo-section-content">
          <Typography transform="none">
            Normal text
          </Typography>

          <Typography transform="uppercase">
            uppercase text
          </Typography>

          <Typography transform="lowercase">
            LOWERCASE TEXT
          </Typography>

          <Typography transform="capitalize">
            capitalize this text
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Semantic Elements">
        <div className="demo-section-content">
          <Typography
            as="h1"
            variant="h1"
          >
            H1 element
          </Typography>

          <Typography
            as="h2"
            variant="h2"
          >
            H2 element
          </Typography>

          <Typography
            as="p"
            variant="body"
          >
            Paragraph element
          </Typography>

          <Typography
            as="span"
            variant="bodySmall"
          >
            Span element
          </Typography>

          <Typography
            as="label"
            variant="bodySmall"
          >
            Label element
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Combined Example">
        <div className="demo-section-content">
          <Typography
            as="h1"
            variant="h1"
            weight="bold"
            color="primary"
          >
            Build with Shivanya
          </Typography>

          <Typography
            as="p"
            variant="body"
            size="lg"
            color="secondary"
          >
            A reusable TypeScript UI system for
            building modern applications.
          </Typography>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={typographyDocs.importCode}
        usageCode={typographyDocs.usageCode}
        props={typographyDocs.props}
      />
    </section>
  );
}