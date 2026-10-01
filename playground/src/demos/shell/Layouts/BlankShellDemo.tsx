import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { BlankShell } from "shivanya-shell";

export default function BlankShellDemo(){return <section className="demo"><DemoHeader title="BlankShell" description="Minimal shell base for screens that need shell context without a predefined header, sidebar, or footer." />
<DemoSection title="Basic"><div className="shell-demo-preview"><BlankShell><div className="shell-demo-content"><div className="shell-demo-card"><strong>Blank shell</strong><p className="shell-demo-muted">Add only the shell primitives required by the page.</p></div></div></BlankShell></div></DemoSection>
<DemoSection title="Use Cases"><div className="shell-demo-grid"><div className="shell-demo-card">Custom application composition</div><div className="shell-demo-card">Special layouts and embedded screens</div></div></DemoSection>
<DemoDocumentation importCode={'import { BlankShell } from "shivanya-shell";'} usageCode={'<BlankShell>\n  <CustomLayout />\n</BlankShell>'} /></section>}
