import { useState } from "react";
import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "../shell-demo.css";
import { AppShell, ShellSidebar } from "shivanya-shell";
import { branding, navigation } from "../_demo-utils";

export default function ShellSidebarDemo(){const [collapsed,setCollapsed]=useState(false);return <section className="demo"><DemoHeader title="ShellSidebar" description="Reusable navigation rail supporting active routes, collapsed mode, positions, variants, badges, dividers, and custom footer content." />
<DemoSection title="Basic"><div className="shell-demo-preview shell-demo-preview-tall"><AppShell><div style={{display:"flex",minHeight:520}}><ShellSidebar navigation={navigation} pathname="/projects" branding={branding} collapsed={collapsed} footer={<div className="shell-demo-muted">Version 1.0</div>} /><div style={{flex:1,padding:24}}>Sidebar content</div></div></AppShell></div></DemoSection>
<DemoSection title="Collapsed"><div className="shell-demo-row"><button className="shell-demo-control" onClick={()=>setCollapsed(v=>!v)}>{collapsed?"Expand sidebar":"Collapse sidebar"}</button></div></DemoSection>
<DemoSection title="Position and Variant"><div className="shell-demo-grid"><div className="shell-demo-card"><ShellSidebar navigation={navigation.slice(0,3)} width={220} position="left" variant="static" /></div><div className="shell-demo-card"><ShellSidebar navigation={navigation.slice(0,3)} width={220} position="right" variant="static" /></div></div></DemoSection>
<DemoDocumentation importCode={'import { ShellSidebar } from "shivanya-shell";'} usageCode={'<ShellSidebar\n  navigation={navigation}\n  pathname="/projects"\n  collapsed={false}\n/>'} /></section>}
