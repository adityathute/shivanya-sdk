import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./navigation-demo.css";
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const variants = ["default", "bordered", "filled", "ghost"] as const;
const radii = ["none", "sm", "md", "lg", "full"] as const;
const states = ["default", "loading", "disabled"] as const;
import { Sidebar } from "shivanya-ui";
const docs={importCode:`import { Sidebar } from "shivanya-ui";`,usageCode:`<Sidebar>
  {Dashboard}
  {Projects}
</Sidebar>`,props:[{name:"size",type:"xs | sm | md | lg | xl",default:"md"},{name:"variant",type:"default | bordered | filled | ghost",default:"default"},{name:"radius",type:"none | sm | md | lg | full",default:"md"},{name:"state",type:"default | loading | disabled",default:"default"}]};
function Items(){return <><Sidebar.Item icon="•">Dashboard</Sidebar.Item><Sidebar.Item active>Projects</Sidebar.Item><Sidebar.Item>Reports</Sidebar.Item><Sidebar.Item disabled>Settings</Sidebar.Item></>}
export default function SidebarDemo(){return <section className="demo"><DemoHeader title="Sidebar" description="Provides vertical navigation for application sections."/><DemoSection title="Basic"><Sidebar><Items/></Sidebar></DemoSection><DemoSection title="Sizes"><div className="navigation-demo-grid navigation-demo-grid-5">{sizes.map(size=><div className="navigation-demo-card" key={size}><span className="navigation-demo-label">{size.toUpperCase()}</span><Sidebar size={size}><Items/></Sidebar></div>)}</div></DemoSection><DemoSection title="Variants"><div className="navigation-demo-grid navigation-demo-grid-4">{variants.map(variant=><div className="navigation-demo-card" key={variant}><span className="navigation-demo-label">{variant}</span><Sidebar variant={variant}><Items/></Sidebar></div>)}</div></DemoSection><DemoSection title="Radius"><div className="navigation-demo-grid navigation-demo-grid-5">{radii.map(radius=><div className="navigation-demo-card" key={radius}><span className="navigation-demo-label">{radius}</span><Sidebar radius={radius}><Items/></Sidebar></div>)}</div></DemoSection><DemoSection title="Item Alignment"><div className="navigation-demo-grid navigation-demo-grid-3">{(["start","center","end"] as const).map(position=><div className="navigation-demo-card" key={position}><span className="navigation-demo-label">{position}</span><Sidebar itemPosition={position}><Items/></Sidebar></div>)}</div></DemoSection><DemoSection title="States"><div className="navigation-demo-grid navigation-demo-grid-3">{states.map(state=><div className="navigation-demo-card" key={state}><span className="navigation-demo-label">{state}</span><Sidebar state={state}><Items/></Sidebar></div>)}</div></DemoSection><DemoDocumentation importCode={docs.importCode} usageCode={docs.usageCode} props={docs.props}/></section>}
