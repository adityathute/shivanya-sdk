import { useState } from "react";
import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./data-display-demo.css";
import {
  Avatar,
  Typography,
  avatarDocs,
} from "shivanya-ui";

export default function AvatarDemo() {
  const [selected, setSelected] = useState(false);

  return (
    <section className="demo">
      <DemoHeader
        title={avatarDocs.name}
        description={avatarDocs.description}
      />

      <DemoSection title="Sizes">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Available avatar sizes from extra small to extra large.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar size="xs" name="Aditya Thute" />
              <span>XS</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar size="sm" name="Aditya Thute" />
              <span>SM</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar size="md" name="Aditya Thute" />
              <span>MD</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar size="lg" name="Aditya Thute" />
              <span>LG</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar size="xl" name="Aditya Thute" />
              <span>XL</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Variants">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Different visual styles for the avatar surface.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar variant="filled" name="AT" />
              <span>Filled</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar variant="outlined" name="AT" />
              <span>Outlined</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar variant="ghost" name="AT" />
              <span>Ghost</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Colors">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Use semantic colors to communicate different meanings.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar color="primary" name="P" />
              <span>Primary</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar color="secondary" name="S" />
              <span>Secondary</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar color="success" name="S" />
              <span>Success</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar color="warning" name="W" />
              <span>Warning</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar color="danger" name="D" />
              <span>Danger</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar color="info" name="I" />
              <span>Info</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Content">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Avatars can display generated initials, custom initials, or icons.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar name="Aditya Thute" />
              <span>Name</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar initials="JS" color="success" />
              <span>Initials</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar icon="★" color="warning" />
              <span>Icon</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Status">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Status indicators show the current state of a person or account.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar name="Online" status="online" />
              <span>Online</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar name="Busy" status="busy" />
              <span>Busy</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar name="Away" status="away" />
              <span>Away</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar name="Offline" status="offline" />
              <span>Offline</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Radius">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Control the shape of the avatar using the radius options.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar radius="sm" name="SM" />
              <span>Small</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar radius="md" name="MD" />
              <span>Medium</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar radius="lg" name="LG" />
              <span>Large</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar radius="full" name="F" />
              <span>Full</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="States">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Interactive, selected, and disabled states.
          </Typography>

          <div className="data-display-demo-items">
            <div className="data-display-demo-item">
              <Avatar
                name="Selected"
                selectable
                selected={selected}
                onSelectChange={setSelected}
              />
              <span>{selected ? "Selected" : "Selectable"}</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar
                name="Click"
                clickable
                onClick={() => {}}
              />
              <span>Clickable</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar
                name="Disabled"
                disabled
              />
              <span>Disabled</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar
                name="Loading"
                loading
              />
              <span>Loading</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection title="Combined">
        <div className="data-display-demo-group">
          <Typography variant="bodySmall" color="secondary">
            Combine size, color, status, radius, and border options.
          </Typography>

          <div className="data-display-demo-items data-display-demo-items-large">
            <div className="data-display-demo-item">
              <Avatar
                size="lg"
                name="Aditya Thute"
                color="primary"
                status="online"
                bordered
              />
              <span>Online</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar
                size="lg"
                initials="JS"
                color="success"
                radius="md"
                status="busy"
                bordered
              />
              <span>Busy</span>
            </div>

            <div className="data-display-demo-item">
              <Avatar
                size="lg"
                icon="★"
                color="warning"
                radius="sm"
                status="away"
              />
              <span>Away</span>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoDocumentation
        importCode={avatarDocs.importCode}
        usageCode={avatarDocs.usageCode}
        props={avatarDocs.props}
      />
    </section>
  );
}