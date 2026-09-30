import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./data-display-demo.css";
import { Avatar, avatarDocs } from "shivanya-ui";

export default function AvatarDemo() {
  return (
    <section className="demo">
      <DemoHeader
        title={avatarDocs.name}
        description={avatarDocs.description}
      />
      <DemoSection title="Sizes">
        <div className="data-display-demo-row">
          <Avatar size="xs" name="Aditya Thute" />
          <Avatar size="sm" name="Aditya Thute" />
          <Avatar size="md" name="Aditya Thute" />
          <Avatar size="lg" name="Aditya Thute" />
          <Avatar size="xl" name="Aditya Thute" />
        </div>
      </DemoSection>
      <DemoSection title="Variants">
        <div className="data-display-demo-row">
          <Avatar variant="filled" name="AT" />
          <Avatar variant="outlined" name="AT" />
          <Avatar variant="ghost" name="AT" />
        </div>
      </DemoSection>
      <DemoSection title="Content">
        <div className="data-display-demo-row">
          <Avatar name="Aditya Thute" />
          <Avatar initials="JS" color="success" />
          <Avatar icon="★" color="warning" />
        </div>
      </DemoSection>
      <DemoSection title="Status">
        <div className="data-display-demo-row">
          <Avatar name="Online" status="online" />
          <Avatar name="Busy" status="busy" />
          <Avatar name="Away" status="away" />
          <Avatar name="Offline" status="offline" />
        </div>
      </DemoSection>
      <DemoSection title="States">
        <div className="data-display-demo-row">
          <Avatar name="Selected" selected selectable />
          <Avatar name="Clickable" clickable />
          <Avatar name="Disabled" disabled />
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
