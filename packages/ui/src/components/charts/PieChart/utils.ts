import { pieChartDefaultProps,pieChartLegendPositions,pieChartSizes,pieChartStates } from "./config";import type { PieChartDatum,PieChartProps,PieChartSegment } from "./PieChart.types";
export function getPieChartProps(props:PieChartProps={}){return {...pieChartDefaultProps,...props}}
export function getPieChartSize(size:PieChartProps["size"]="md"){return pieChartSizes[size??"md"]??pieChartSizes.md}
export function getPieChartState(state:PieChartProps["state"]="default"){return state??pieChartStates.default}
export function getLegendPosition(position:PieChartProps["legendPosition"]="bottom"){return pieChartLegendPositions[position??"bottom"]??"bottom"}
export function isLoading(state:PieChartProps["state"]){return state===pieChartStates.loading}
export function isEmpty(state:PieChartProps["state"],data?:PieChartDatum[]){return state===pieChartStates.empty||!Array.isArray(data)||data.length===0}
export function isDisabled(state:PieChartProps["state"]){return state===pieChartStates.disabled}
export function getTotal(data:PieChartDatum[]=[]){return data.reduce((total,item)=>total+Number(item.value||0),0)}
export function getPercentage(value:number,total:number){return total?(value/total)*100:0}
export function normalizeData(data:PieChartDatum[]=[]){const total=getTotal(data);return data.map((item,index)=>{const value=Number(item.value??0);return {id:item.id??index,label:item.label??item.name??"",value,color:item.color,percentage:getPercentage(value,total)}})}
export function formatValue(value:number|string,formatter?:((value:number|string)=>React.ReactNode)){return formatter?formatter(value):new Intl.NumberFormat().format(Number(value)||0)}
export function formatLabel(label:string,formatter?:((value:string)=>React.ReactNode)){return formatter?formatter(label):label}
export function getCenter(size:number){return size/2}
export function getViewBox(size:number){return `0 0 ${size} ${size}`}
export function polarToCartesian(cx:number,cy:number,radius:number,angle:number){const radians=((angle-90)*Math.PI)/180;return{x:cx+radius*Math.cos(radians),y:cy+radius*Math.sin(radians)}}
export function getPieSegmentPath(cx:number,cy:number,radius:number,startAngle:number,endAngle:number){const sweep=endAngle-startAngle;if(sweep>=359.999)return [`M ${cx} ${cy}`,`m 0 -${radius}`,`a ${radius} ${radius} 0 1 1 0 ${radius*2}`,`a ${radius} ${radius} 0 1 1 0 -${radius*2}`,"Z"].join(" ");const start=polarToCartesian(cx,cy,radius,startAngle);const end=polarToCartesian(cx,cy,radius,endAngle);const largeArc=sweep>180?1:0;return [`M ${cx} ${cy}`,`L ${start.x} ${start.y}`,`A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`,"Z"].join(" ")}
export function getSegments(data:PieChartDatum[]=[],startAngle=-90):PieChartSegment[]{const normalized=normalizeData(data);let current=startAngle;return normalized.map(item=>{const sweep=(item.percentage/100)*360;const segment={...item,startAngle:current,endAngle:current+sweep};current+=sweep;return segment})}
export function getSegmentCenter(cx:number,cy:number,radius:number,startAngle:number,endAngle:number){return polarToCartesian(cx,cy,radius*.6,(startAngle+endAngle)/2)}
export function getChartRadius(size:number,outerRadius?:number){return outerRadius??size*.83/2}
const DEFAULT_COLORS=["var(--shivanya-chart-color-1)","var(--shivanya-chart-color-2)","var(--shivanya-chart-color-3)","var(--shivanya-chart-color-4)","var(--shivanya-chart-color-5)","var(--shivanya-chart-color-6)","var(--shivanya-chart-color-7)","var(--shivanya-chart-color-8)"];
export function getSegmentColor(item:PieChartSegment,index:number){return item.color??DEFAULT_COLORS[index%DEFAULT_COLORS.length]}
export function getAriaProps(){return {role:"img" as const,"aria-roledescription":"pie chart"}}
