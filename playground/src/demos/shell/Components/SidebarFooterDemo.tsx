import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { SidebarFooter } from "shivanya-shell";

export default function SidebarFooterDemo(){return <section className="demo"><DemoHeader title="SidebarFooter" description="Small reusable footer block for application sidebars." />
<DemoSection title="Basic"><div className="shell-demo-card"><SidebarFooter appName="Shivanya" version="v1.0.0" /></div></DemoSection>
<DemoSection title="Custom Content"><div className="shell-demo-card"><SidebarFooter appName="Workspace" version="Free plan"><span>Storage: 2 GB</span></SidebarFooter></div></DemoSection>
<DemoDocumentation importCode={'import { SidebarFooter } from "shivanya-shell";'} usageCode={'<SidebarFooter appName="Shivanya" version="v1.0.0" />'} /></section>}
