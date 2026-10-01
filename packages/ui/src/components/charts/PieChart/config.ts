import type { PieChartDatum } from "./PieChart.types";
export const pieChartSizes={xs:160,sm:200,md:240,lg:300,xl:360} as const;
export const pieChartStates={default:"default",loading:"loading",empty:"empty",disabled:"disabled"} as const;
export const pieChartLegendPositions={top:"top",right:"right",bottom:"bottom",left:"left"} as const;
export const pieChartDefaultProps={size:"md",outerRadius:undefined,startAngle:-90,endAngle:270,data:[] as PieChartDatum[],state:"default",showLabels:true,showLegend:true,legendPosition:"bottom",onSegmentClick:undefined,valueFormatter:undefined,labelFormatter:undefined} as const;
