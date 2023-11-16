import React, { FC } from 'react';
import { GanttTimeLineWrapper } from './GanttTimeLine.styled';
import {  toTimeFormat } from '../../utils/GanttUtils';

interface GanttTimeLineProps {
   range : {start:number,end:number},
   scale : number;
}

const GanttTimeLine: FC<GanttTimeLineProps> = ({
   range,scale
}) => {
   const numOfTimesDivs : number =Math.floor((range.end - range.start)/(scale*60));
   return(
 <GanttTimeLineWrapper>
   {
      Array(numOfTimesDivs).fill(0).map((_,ind : number)=> {
         return <div key={ind} className='times' style={{right : `${ind*60 - window.innerWidth}px`}}>{toTimeFormat(range.start - (range.start % (60 *scale))  + ind * scale * 60)}</div>
      })
   }
 </GanttTimeLineWrapper>
)};

export default GanttTimeLine;
