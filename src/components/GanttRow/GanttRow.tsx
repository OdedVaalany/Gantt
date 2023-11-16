import React, { FC, useState } from 'react';
import { GanttRowWrapper } from './GanttRow.styled';
import GanttEvent from '../GanttEvent/GanttEvent';
import { inRange } from '../../utils/GanttUtils';

interface GanttRowProps {
   data : ganttRow;
   isOpen? : boolean
   range : {start : number,end : number};
   scale : number
}

const GanttRow: FC<GanttRowProps> = ({range,scale,data,isOpen = false}) =>{
   return (
 <GanttRowWrapper style={{background : `${data.rowColor}a0`,width : `${(range.end-range.start)/scale}px`,transform : `translateX(${window.innerWidth}px)`}}>
    {
      data.events.map((ev : ganttEvent[],ind : number) => ( isOpen || ind < 1) &&<div className='row' key={ind}>
         {
            ev.map((event : ganttEvent,iind : number) => {
               if(inRange(event,range)){
               const right : number = (event.startTime - range.start)/scale;
               const width : number = (event.endTime-event.startTime)/scale;

            return <GanttEvent key={iind} right={right} width={width} data={event}/>}})
         }
      </div>)
    }
 </GanttRowWrapper>
)}

export default GanttRow;
