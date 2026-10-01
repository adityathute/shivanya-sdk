import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { DrawerHeader } from "shivanya-shell";
import { branding } from "../_demo-utils";

export default function DrawerHeaderDemo(){return <section className="demo"><DemoHeader title="DrawerHeader" description="Compact branding header for mobile or drawer navigation surfaces." />
<DemoSection title="Basic"><div className="shell-demo-card"><DrawerHeader branding={branding} onClose={()=>undefined} /></div></DemoSection>
<DemoSection title="Without Branding"><div className="shell-demo-card"><DrawerHeader onClose={()=>undefined} /></div></DemoSection>
<DemoDocumentation importCode={'import { DrawerHeader } from "shivanya-shell";'} usageCode={'<DrawerHeader\n  branding={branding}\n  onClose={closeMenu}\n/>'} /></section>}
