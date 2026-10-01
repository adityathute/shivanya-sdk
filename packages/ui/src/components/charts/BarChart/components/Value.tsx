import { memo } from "react";
import type { BarChartValueType } from "../BarChart.types";
function formatSeconds(seconds:number){const rounded=Math.round(seconds);const hours=Math.floor(rounded/3600);const minutes=Math.floor((rounded%3600)/60);const secs=rounded%60;if(hours>0)return `${hours}h ${minutes}m ${secs}s`;if(minutes>0)return `${minutes}m ${secs}s`;return `${secs}s`}
interface ValueProps{x:number;y:number;value?:number|string;formatter?:(value:number|string)=>React.ReactNode;type?:BarChartValueType;textAnchor?:"start"|"middle"|"end"}
function Value({x,y,value=0,formatter,type="number",textAnchor="end"}:ValueProps){const display=formatter?formatter(value):type==="seconds"?formatSeconds(Number(value)):new Intl.NumberFormat().format(Number(value)||0);return <text x={x} y={y} textAnchor={textAnchor} dominantBaseline="middle" fontSize="13" fontWeight="600" fill="var(--shivanya-color-text-primary)">{display}</text>}
export default memo(Value);
