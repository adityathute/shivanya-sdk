import { memo } from "react";
import type { BarChartPadding } from "../BarChart.types";
interface GridProps {width:number;height:number;padding:BarChartPadding;orientation?:"horizontal"|"vertical";labelWidth?:number;valueWidth?:number;lines?:number}
function Grid({width,height,padding,orientation="horizontal",labelWidth=0,valueWidth=0,lines=4}:GridProps){
 if(orientation==="vertical"){const chartHeight=height-padding.top-padding.bottom;return <g>{Array.from({length:lines}).map((_,index)=><line key={index} x1={padding.left} y1={padding.top+(chartHeight/lines)*(index+1)} x2={width-padding.right} y2={padding.top+(chartHeight/lines)*(index+1)} stroke="var(--shivanya-color-border)" strokeWidth="1" strokeDasharray="4 4"/>)}</g>}
 const startX=padding.left+labelWidth; const endX=width-padding.right-valueWidth;
 return <g>{Array.from({length:lines}).map((_,index)=>{const x=startX+((endX-startX)/lines)*(index+1);return <line key={index} x1={x} y1={padding.top} x2={x} y2={height-padding.bottom} stroke="var(--shivanya-color-border)" strokeWidth="1" strokeDasharray="4 4"/>})}</g>;
}
export default memo(Grid);
