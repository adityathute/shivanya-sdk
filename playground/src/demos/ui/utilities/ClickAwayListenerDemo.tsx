import { useState } from "react";

import {
  Button,
  ClickAwayListener,
  clickAwayListenerDocs,
  Typography,
} from "shivanya-ui";

import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";

import "../../../components/demo/demo.css";

export default function ClickAwayListenerDemo() {
  const [open, setOpen] = useState(false);
  const [lastEvent, setLastEvent] = useState(
    "No outside interaction yet."
  );

  return (
    <section className="demo">
      <DemoHeader
        title={clickAwayListenerDocs.name}
        description={clickAwayListenerDocs.description}
      />

      <DemoSection title="Basic">
        <div className="demo-section-content">
          <ClickAwayListener
            onClickAway={(event) =>
              setLastEvent(
                `Outside interaction: ${event.type}`
              )
            }
          >
            <div className="demo-click-away-boundary">
              <Typography weight="semibold">
                Click-away boundary
              </Typography>

              <Typography
                color="secondary"
                variant="bodySmall"
              >
                Click outside this box to trigger the
                callback.
              </Typography>

              <Button
                onClick={() =>
                  setOpen((value) => !value)
                }
              >
                {open ? "Close" : "Open"}
              </Button>
            </div>
          </ClickAwayListener>

          <Typography
            color="secondary"
            variant="bodySmall"
          >
            {lastEvent}
          </Typography>
        </div>
      </DemoSection>

      <DemoSection title="Mouse Events">
        <div className="demo-example-row">
          {(
            [
              "mousedown",
              "mouseup",
              "click",
            ] as const
          ).map((eventName) => (
            <ClickAwayListener
              key={eventName}
              mouseEvent={eventName}
              onClickAway={() =>
                setLastEvent(
                  `Mouse event: ${eventName}`
                )
              }
            >
              <Button variant="secondary">
                {eventName}
              </Button>
            </ClickAwayListener>
          ))}
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="demo-example-row">
          <ClickAwayListener
            onClickAway={() =>
              setLastEvent("Default state")
            }
          >
            <Button>Default</Button>
          </ClickAwayListener>

          <ClickAwayListener
            state="active"
            onClickAway={() =>
              setLastEvent("Active state")
            }
          >
            <Button>Active</Button>
          </ClickAwayListener>

          <ClickAwayListener
            state="inactive"
            onClickAway={() =>
              setLastEvent("Inactive state")
            }
          >
            <Button>Inactive</Button>
          </ClickAwayListener>

          <ClickAwayListener
            disabled
            onClickAway={() =>
              setLastEvent("Disabled state")
            }
          >
            <Button disabled>
              Disabled
            </Button>
          </ClickAwayListener>
        </div>
      </DemoSection>

      <DemoSection title="Touch Event">
        <div className="demo-example-row">
          <ClickAwayListener
            touchEvent="touchend"
            onClickAway={() =>
              setLastEvent(
                "Touch event: touchend"
              )
            }
          >
            <Button variant="outline">
              touchend
            </Button>
          </ClickAwayListener>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={clickAwayListenerDocs.importCode}
        usageCode={clickAwayListenerDocs.usageCode}
        props={clickAwayListenerDocs.props}
      />
    </section>
  );
}