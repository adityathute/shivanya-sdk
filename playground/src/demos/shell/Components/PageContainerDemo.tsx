import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { PageContainer } from "shivanya-shell";

export default function PageContainerDemo(){return <section className="demo"><DemoHeader title="PageContainer" description="Generic page-width primitive that can render as any HTML element." />
<DemoSection title="Basic"><div className="shell-demo-card"><PageContainer><strong>Page content</strong><p className="shell-demo-muted">The container provides a reusable full-width content boundary.</p></PageContainer></div></DemoSection>
<DemoSection title="Custom Element and Style"><PageContainer as="section" style={{padding:20,border:"1px dashed var(--shivanya-color-border)"}}><span>Rendered as section with custom style.</span></PageContainer></DemoSection>
<DemoDocumentation importCode={'import { PageContainer } from "shivanya-shell";'} usageCode={'<PageContainer as="main">\n  <Content />\n</PageContainer>'} /></section>}
