import { memo } from "react";
import type { BarChartPadding } from "../BarChart.types";
interface AxisProps { width:number; height:number; padding:BarChartPadding; labelWidth:number; valueWidth:number; showXAxis?:boolean; showYAxis?:boolean; }
function Axis({width,height,padding,labelWidth,valueWidth,showXAxis=true,showYAxis=false}:AxisProps){
 const startX=padding.left+labelWidth; const endX=width-padding.right-valueWidth;
 return <g>{showXAxis&&<line x1={startX} y1={height-padding.bottom} x2={endX} y2={height-padding.bottom} stroke="var(--shivanya-color-border)" strokeWidth="1.5"/>}{showYAxis&&<line x1={startX} y1={padding.top} x2={startX} y2={height-padding.bottom} stroke="var(--shivanya-color-border)" strokeWidth="1.5"/>}</g>;
}
export default memo(Axis);
