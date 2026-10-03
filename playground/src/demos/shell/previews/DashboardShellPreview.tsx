import { DashboardShell } from "shivanya-shell";
import {
  branding,
  navigation,
  DemoButton,
  DemoContent,
} from "../_demo-utils";

export default function DashboardShellPreview() {
  return (
    <DashboardShell
      branding={branding}
      navigation={navigation}
      pathname="/projects"
      headerEnd={
        <DemoButton>
          Profile
        </DemoButton>
      }
      footer={
        <div className="shell-demo-content">
          Dashboard footer
        </div>
      }
      showFooter
    >
      <DemoContent title="Dashboard page" />
    </DashboardShell>
  );
}