import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { ShellRoot } from "shivanya-shell";

export default function ShellRootDemo(){return <section className="demo"><DemoHeader title="ShellRoot" description="Low-level shell root container for custom shell composition." /><DemoSection title="Basic"><ShellRoot><div className="shell-demo-card">Custom shell root content</div></ShellRoot></DemoSection><DemoSection title="Custom Class and Style"><ShellRoot className="custom-shell-root" style={{padding:16}}><div className="shell-demo-card">Root styling can be extended by the application.</div></ShellRoot></DemoSection><DemoDocumentation importCode={'import { ShellRoot } from "shivanya-shell";'} usageCode={'<ShellRoot>\n  <CustomShell />\n</ShellRoot>'} /></section>}
