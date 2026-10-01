import { memo } from "react";
import { LABEL_WIDTH, BAR_HEIGHT, ROW_HEIGHT } from "../constants";
const skeletonWidths=[0.82,0.68,0.92,0.76,0.98];
function Skeleton({rows=5,labelWidth=LABEL_WIDTH,barHeight=BAR_HEIGHT,rowHeight=ROW_HEIGHT,width=420}:{rows?:number;labelWidth?:number;barHeight?:number;rowHeight?:number;width?:number}){return <svg width="100%" height={rows*rowHeight}>{Array.from({length:rows}).map((_,index)=>{const y=index*rowHeight+(rowHeight-barHeight)/2;const barWidth=width*skeletonWidths[index%skeletonWidths.length];return <g key={index}><rect className="shivanya-chart-skeleton" x="0" y={y+(barHeight-12)/2} width={labelWidth} height="12" rx="6"/><rect className="shivanya-chart-skeleton" x={labelWidth+20} y={y} width={barWidth} height={barHeight} rx={barHeight/2}/></g>})}</svg>}
export default memo(Skeleton);
