import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { AppShell, ShellMain } from "shivanya-shell";

export default function ShellMainDemo(){return <section className="demo"><DemoHeader title="ShellMain" description="Reusable main content primitive with configurable element, className, and inline style." />
<DemoSection title="Basic"><div className="shell-demo-preview"><AppShell><ShellMain><div className="shell-demo-card">Main application content</div></ShellMain></AppShell></div></DemoSection>
<DemoSection title="Custom Element"><div className="shell-demo-card"><ShellMain as="section" style={{padding:20}}><strong>Rendered as a section</strong></ShellMain></div></DemoSection>
<DemoDocumentation importCode={'import { ShellMain } from "shivanya-shell";'} usageCode={'<ShellMain as="main">\n  <Content />\n</ShellMain>'} /></section>}
