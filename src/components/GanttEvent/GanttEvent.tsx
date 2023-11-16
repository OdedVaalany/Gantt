import React, { FC } from 'react';
import { GanttEventWrapper } from './GanttEvent.styled';

interface GanttEventProps {
   data : ganttEvent
   right : number;
   width : number;
}

const GanttEvent: FC<GanttEventProps> = ({
   data, right,width
}) => (
 <GanttEventWrapper style={{backgroundColor : data.isHollow ? 'transparent' : data.color,borderColor: data.color,right : `${right}px` ,width : `${width}px`}}>
   {width > 32 && data.icon}
    <p>GanttEvent Component</p>
 </GanttEventWrapper>
);

export default GanttEvent;
