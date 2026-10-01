import { memo } from "react";
import type { MouseEventHandler } from "react";
import Bar from "./components/Bar";
import Label from "./components/Label";
import Value from "./components/Value";
import type { BarChartValueType } from "./BarChart.types";
interface ChartRowProps {key?: string | number;label?:string;value?:number|string;labelX:number;labelY:number;textAnchor:"start"|"middle"|"end";valueX:number;barX:number;barY:number;barWidth:number;centerY:number;barHeight:number;barRadius:number;color:string;formatter?:(value:number|string)=>React.ReactNode;valueType?:BarChartValueType;animate:boolean;animationDuration:number;showLabel?:boolean;showValue?:boolean;onMouseEnter?:MouseEventHandler<SVGRectElement>;onMouseMove?:MouseEventHandler<SVGRectElement>;onMouseLeave?:MouseEventHandler<SVGRectElement>}
function ChartRow({label,value,labelX,labelY,textAnchor,valueX,barX,barY,barWidth,centerY,barHeight,barRadius,color,formatter,valueType,animate,animationDuration,showLabel=true,showValue=true,onMouseEnter,onMouseMove,onMouseLeave}:ChartRowProps){return <g>{showLabel&&<Label x={labelX} y={labelY} text={label} textAnchor={textAnchor}/>}<Bar x={barX} y={barY} width={barWidth} height={barHeight} radius={barRadius} color={color} duration={animate?animationDuration:0} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}/>{showValue&&<Value x={valueX} y={centerY} value={value} formatter={formatter} type={valueType}/>}</g>}
export default memo(ChartRow);
