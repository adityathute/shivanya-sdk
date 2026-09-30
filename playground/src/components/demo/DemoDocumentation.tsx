import type { ReactNode } from "react";
import { Typography } from "shivanya-ui";

import DemoCodeBlock from "./DemoCodeBlock";

interface DemoDocumentationProp {
  name: string;
  type: string;
  defaultValue?: string;
  description?: string;
}

interface DemoDocumentationProps {
  importCode?: string;
  usageCode?: string;
  additionalCode?: {
    title: string;
    code: string;
  }[];
props?: readonly DemoDocumentationProp[];
  children?: ReactNode;
}

export default function DemoDocumentation({
  importCode,
  usageCode,
  additionalCode,
  props,
  children,
}: DemoDocumentationProps) {
  return (
    <section className="demo-documentation">
      <Typography
        variant="h3"
        className="demo-documentation-title"
      >
        Documentation
      </Typography>

      {importCode && (
        <div className="demo-documentation-block">
          <Typography className="demo-documentation-label">
            Import
          </Typography>

          <DemoCodeBlock code={importCode} />
        </div>
      )}

      {usageCode && (
        <div className="demo-documentation-block">
          <Typography className="demo-documentation-label">
            Usage
          </Typography>

          <DemoCodeBlock code={usageCode} />
        </div>
      )}

      {additionalCode?.map((item) => (
        <div
          key={item.title}
          className="demo-documentation-block"
        >
          <Typography className="demo-documentation-label">
            {item.title}
          </Typography>

          <DemoCodeBlock code={item.code} />
        </div>
      ))}

      {props && props.length > 0 && (
        <div className="demo-props">
          <Typography className="demo-props-title">
            Props
          </Typography>

          <div className="demo-props-grid">
            {props.map((prop) => (
              <div
                key={prop.name}
                className="demo-prop-card"
              >
                <Typography
                  variant="body"
                  weight="semibold"
                >
                  {prop.name}
                </Typography>

                <div className="demo-prop-type">
                  <Typography
                    variant="caption"
                    color="muted"
                    transform="uppercase"
                  >
                    Type
                  </Typography>

                  <div className="demo-prop-type-value">
                    <code>{prop.type}</code>
                  </div>
                </div>

                {prop.defaultValue !== undefined && (
                  <div className="demo-prop-default">
                    <Typography
                      variant="caption"
                      color="muted"
                      transform="uppercase"
                    >
                      Default
                    </Typography>

                    <code>
                      {prop.defaultValue}
                    </code>
                  </div>
                )}

                {prop.description && (
                  <Typography
                    variant="bodySmall"
                    color="secondary"
                    className="demo-prop-description"
                  >
                    {prop.description}
                  </Typography>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {children}
    </section>
  );
}