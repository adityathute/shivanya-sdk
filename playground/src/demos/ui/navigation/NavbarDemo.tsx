import DemoDocumentation from "../../../components/demo/DemoDocumentation";
import DemoHeader from "../../../components/demo/DemoHeader";
import DemoSection from "../../../components/demo/DemoSection";
import "../../../components/demo/demo.css";
import "./navigation-demo.css";
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
const variants = ["default", "bordered", "filled", "ghost"] as const;
const radii = ["none", "sm", "md", "lg", "full"] as const;
const states = ["default", "loading", "disabled"] as const;
import { Navbar } from "shivanya-ui";
const docs={importCode:`import { Navbar } from "shivanya-ui";`,usageCode:`<Navbar>
  {Home}
  {Products}
</Navbar>`,props:[{name:"size",type:"xs | sm | md | lg | xl",default:"md"},{name:"variant",type:"default | bordered | filled | ghost",default:"default"},{name:"radius",type:"none | sm | md | lg | full",default:"md"},{name:"state",type:"default | loading | disabled",default:"default"}]};
function Items(){return <><Navbar.Item icon="•">Home</Navbar.Item><Navbar.Item active>Products</Navbar.Item><Navbar.Item>Pricing</Navbar.Item><Navbar.Item disabled>Contact</Navbar.Item></>}
export default function NavbarDemo(){return <section className="demo"><DemoHeader title="Navbar" description="Provides horizontal primary navigation."/><DemoSection title="Basic"><Navbar><Items/></Navbar></DemoSection><DemoSection title="Sizes"><div className="navigation-demo-grid navigation-demo-grid-5">{sizes.map(size=><div className="navigation-demo-card" key={size}><span className="navigation-demo-label">{size.toUpperCase()}</span><Navbar size={size}><Items/></Navbar></div>)}</div></DemoSection><DemoSection title="Variants"><div className="navigation-demo-grid navigation-demo-grid-4">{variants.map(variant=><div className="navigation-demo-card" key={variant}><span className="navigation-demo-label">{variant}</span><Navbar variant={variant}><Items/></Navbar></div>)}</div></DemoSection><DemoSection title="Radius"><div className="navigation-demo-grid navigation-demo-grid-5">{radii.map(radius=><div className="navigation-demo-card" key={radius}><span className="navigation-demo-label">{radius}</span><Navbar radius={radius}><Items/></Navbar></div>)}</div></DemoSection><DemoSection title="Item Alignment"><div className="navigation-demo-grid navigation-demo-grid-3">{(["start","center","end"] as const).map(position=><div className="navigation-demo-card" key={position}><span className="navigation-demo-label">{position}</span><Navbar itemPosition={position}><Items/></Navbar></div>)}</div></DemoSection><DemoSection title="States"><div className="navigation-demo-grid navigation-demo-grid-3">{states.map(state=><div className="navigation-demo-card" key={state}><span className="navigation-demo-label">{state}</span><Navbar state={state}><Items/></Navbar></div>)}</div></DemoSection><DemoDocumentation importCode={docs.importCode} usageCode={docs.usageCode} props={docs.props}/></section>}
