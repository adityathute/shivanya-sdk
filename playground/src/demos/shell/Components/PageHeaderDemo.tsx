import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { PageHeader } from "shivanya-shell";
import { DemoButton } from "../_demo-utils";

export default function PageHeaderDemo(){return <section className="demo"><DemoHeader title="PageHeader" description="Reusable page heading with title, description, actions, and custom content slots." />
<DemoSection title="Basic"><div className="shell-demo-card"><PageHeader title="Dashboard" description="Overview of the current workspace." /></div></DemoSection>
<DemoSection title="With Actions"><div className="shell-demo-card"><PageHeader title="Projects" description="Manage your projects." actions={<><DemoButton>Import</DemoButton><DemoButton primary>Create</DemoButton></>} /></div></DemoSection>
<DemoSection title="Custom Content"><div className="shell-demo-card"><PageHeader title="Account"><span className="shell-demo-muted">Additional metadata or breadcrumbs can be placed here.</span></PageHeader></div></DemoSection>
<DemoDocumentation importCode={'import { PageHeader } from "shivanya-shell";'} usageCode={'<PageHeader\n  title="Projects"\n  description="Manage projects"\n  actions={<Actions />}\n/>'} /></section>}
