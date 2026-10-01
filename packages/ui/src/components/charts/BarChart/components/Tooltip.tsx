import { memo } from "react";
interface TooltipProps{x:number;y:number;label?:string;value?:React.ReactNode}
function Tooltip({x,y,label,value}:TooltipProps){if(!label)return null;return <div className="shivanya-chart-tooltip" style={{left:x,top:y}}><strong>{label}</strong><div>{value}</div></div>}
export default memo(Tooltip);
