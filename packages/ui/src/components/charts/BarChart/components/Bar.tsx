"use client";
import { memo, useEffect, useState, type MouseEventHandler } from "react";
interface BarProps { x:number;y:number;width:number;height:number;radius?:number;color?:string;duration?:number;orientation?:"horizontal"|"vertical";onClick?:MouseEventHandler<SVGRectElement>;onMouseEnter?:MouseEventHandler<SVGRectElement>;onMouseMove?:MouseEventHandler<SVGRectElement>;onMouseLeave?:MouseEventHandler<SVGRectElement>; }
function Bar({x,y,width,height,radius=999,color,duration=700,orientation="horizontal",onClick,onMouseEnter,onMouseMove,onMouseLeave}:BarProps){
 const [size,setSize]=useState(0);
 useEffect(()=>{const frame=requestAnimationFrame(()=>setSize(orientation==="horizontal"?width:height));return()=>cancelAnimationFrame(frame)},[width,height,orientation]);
 const animatedY=orientation==="vertical"?y+(height-size):y;
 const safeWidth=Number.isFinite(width)?width:0; const safeHeight=Number.isFinite(height)?height:0; const safeSize=Number.isFinite(size)?size:0;
 return <rect className="shivanya-chart-bar" x={x} y={animatedY} width={orientation==="horizontal"?safeSize:safeWidth} height={orientation==="vertical"?safeSize:safeHeight} rx={radius} ry={radius} fill={color} onClick={onClick} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} style={{transition:`width ${duration}ms cubic-bezier(.22,.61,.36,1),height ${duration}ms cubic-bezier(.22,.61,.36,1),y ${duration}ms cubic-bezier(.22,.61,.36,1)`}}/>;
}
export default memo(Bar);

