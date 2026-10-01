import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { AppShell, ShellMobileNav, ShellHeader } from "shivanya-shell";
import { branding, navigation, DemoButton } from "../_demo-utils";

export default function ShellMobileNavDemo(){return <section className="demo"><DemoHeader title="ShellMobileNav" description="Responsive navigation layer for mobile layouts with a backdrop, close action, and reusable sidebar content." />
<DemoSection title="Interactive"><div className="shell-demo-preview"><AppShell defaultMobileOpen><ShellHeader branding={branding} end={<DemoButton>Action</DemoButton>} /><ShellMobileNav navigation={navigation} pathname="/projects" branding={branding} /><div className="shell-demo-content"><div className="shell-demo-card">Mobile navigation is open in this preview.</div></div></AppShell></div></DemoSection>
<DemoSection title="Controlled"><div className="shell-demo-card"><p className="shell-demo-muted">Use <code>open</code> and <code>onClose</code> when the application needs external control.</p></div></DemoSection>
<DemoDocumentation importCode={'import { ShellMobileNav } from "shivanya-shell";'} usageCode={'<ShellMobileNav\n  navigation={navigation}\n  open={open}\n  onClose={() => setOpen(false)}\n/>'} /></section>}
