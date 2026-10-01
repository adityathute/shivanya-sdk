"use client";
import { memo, useMemo, useRef } from "react";
import type { BarChartProps } from "./BarChart.types";
import { barChartDefaultProps } from "./config";
import { isDisabled,isEmpty,isLoading } from "./utils";
import useResizeObserver from "./hooks/useResizeObserver";
import useChartDimensions from "./hooks/useChartDimensions";
import Skeleton from "./components/Skeleton";
import HorizontalLayout from "./layouts/HorizontalLayout";
import VerticalLayout from "./layouts/VerticalLayout";

function BarChart(props:BarChartProps){const merged={...barChartDefaultProps,...props};const {data=[],padding,rowHeight,valueFormatter,valueType,animate=true,animationDuration=700,showGrid=true,showXAxis=false,showYAxis=false,showLabels=true,showValues=true,state="default",direction="horizontal",labelPosition="left",className,style,...rest}=merged;const wrapperRef=useRef<HTMLDivElement | null>(null);const {width}=useResizeObserver(wrapperRef);const safeWidth=width||getDefaultWidth(merged.size);const dimensions=useChartDimensions({width:safeWidth,data,padding,rowHeight,direction,labelPosition});const disabled=isDisabled(state);const classes=["shivanya-bar-chart",disabled?"is-disabled":"",isEmpty(state,data)?"is-empty":"",className].filter(Boolean).join(" ");if(isLoading(state))return <div className={classes} style={style}><Skeleton rows={data.length||5}/></div>;if(isEmpty(state,data))return <div className={classes} style={style} role="img" aria-label="Bar chart"><div className="shivanya-chart-empty">No data available.</div></div>;return <div ref={wrapperRef} className={classes} style={style} role="img" aria-label="Bar chart" {...rest}><svg width="100%" height={dimensions.height} viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}><title>Bar chart</title>{direction==="vertical"?<VerticalLayout data={data} dimensions={dimensions} animate={animate} animationDuration={animationDuration} showGrid={showGrid} showXAxis={showXAxis} showYAxis={showYAxis} showLabels={showLabels} showValues={showValues} valueFormatter={valueFormatter}/>:<HorizontalLayout data={data} dimensions={dimensions} animate={animate} animationDuration={animationDuration} showGrid={showGrid} showXAxis={showXAxis} showYAxis={showYAxis} showLabels={showLabels} showValues={showValues} valueFormatter={valueFormatter} labelPosition={labelPosition}/>}</svg></div>}
function getDefaultWidth(size:BarChartProps["size"]){return ({xs:240,sm:320,md:420,lg:560,xl:720}[size??"lg"]??560)}
export default memo(BarChart);
