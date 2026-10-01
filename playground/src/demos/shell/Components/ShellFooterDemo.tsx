import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellFooter } from "shivanya-shell";
import { branding } from "../_demo-utils";

export default function ShellFooterDemo(){return <section className="demo"><DemoHeader title="ShellFooter" description="Reusable footer primitive with optional branding and custom content." />
<DemoSection title="Basic"><div className="shell-demo-preview"><ShellFooter branding={branding} /></div></DemoSection>
<DemoSection title="Custom Content"><div className="shell-demo-preview"><ShellFooter branding={branding}><a href="/privacy">Privacy</a><a href="/terms">Terms</a><span>v1.0.0</span></ShellFooter></div></DemoSection>
<DemoDocumentation importCode={'import { ShellFooter } from "shivanya-shell";'} usageCode={'<ShellFooter branding={branding}>\n  <FooterLinks />\n</ShellFooter>'} /></section>}
