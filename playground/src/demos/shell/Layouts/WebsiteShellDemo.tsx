import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { WebsiteShell, PageHeader } from "shivanya-shell";
import { branding, DemoButton } from "../_demo-utils";

export default function WebsiteShellDemo(){return <section className="demo"><DemoHeader title="WebsiteShell" description="Simple public-facing shell with a header, main content area, and footer." />
<DemoSection title="Basic"><div className="shell-demo-preview"><WebsiteShell branding={branding} headerEnd={<DemoButton>Sign in</DemoButton>} footer={<div>© Shivanya Website</div>}><PageHeader title="Public page" description="A reusable website layout without application navigation." /><div className="shell-demo-card">Website content</div></WebsiteShell></div></DemoSection>
<DemoSection title="Content Padding"><div className="shell-demo-grid"><div className="shell-demo-card">Default content padding</div><div className="shell-demo-card">Custom padding can be supplied with <code>contentPadding</code>.</div></div></DemoSection>
<DemoDocumentation importCode={'import { WebsiteShell } from "shivanya-shell";'} usageCode={'<WebsiteShell branding={branding}>\n  <Page />\n</WebsiteShell>'} /></section>}
