import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { CenteredShell } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";

export default function CenteredShellDemo(){return <section className="demo"><DemoHeader title="CenteredShell" description="Centered content shell for focused pages such as forms, setup flows, and lightweight screens." />
<DemoSection title="Basic"><div className="shell-demo-preview"><CenteredShell branding={branding} headerEnd={<DemoButton>Help</DemoButton>}><div className="shell-demo-card"><strong>Centered content</strong><p className="shell-demo-muted">The content area is centered with a configurable maximum width.</p></div></CenteredShell></div></DemoSection>
<DemoSection title="Max Width"><div className="shell-demo-row"><DemoButton>maxWidth: 480</DemoButton><DemoButton>maxWidth: 640</DemoButton><DemoButton>maxWidth: 960</DemoButton></div></DemoSection>
<DemoDocumentation importCode={'import { CenteredShell } from "shivanya-shell";'} usageCode={'<CenteredShell maxWidth={640}>\n  <Content />\n</CenteredShell>'} /></section>}
