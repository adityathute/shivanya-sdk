import { memo } from "react";
interface LabelProps{x:number;y:number;text?:string;textAnchor?:"start"|"middle"|"end"}
function Label({x,y,text,textAnchor="end"}:LabelProps){return <text x={x} y={y} textAnchor={textAnchor} dominantBaseline="middle" fontSize="13" fontWeight="500" fill="var(--shivanya-color-text-secondary)">{text}</text>}
export default memo(Label);
