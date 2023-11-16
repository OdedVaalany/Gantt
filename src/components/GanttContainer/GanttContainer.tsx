import React, { FC, useEffect, useState } from 'react';
import { GanttContainerWrapper } from './GanttContainer.styled';
import GanttTimeLine from '../GanttTimeLine/GanttTimeLine';
import { MIN, nextScale, prevScale, toTimeFormat } from '../../utils/GanttUtils';
import { Scale } from '@mui/icons-material';
import GanttRow from '../GanttRow/GanttRow';
import GanttMenu from '../GanttMenu/GanttMenu';

interface GanttContainerProps {
   data? : ganttRow[]
   initialStart? : number
}

const GanttContainer: FC<GanttContainerProps> = ({
   data =[],
   initialStart = Date.now()
}) => {
   const [offset,setOffset] = useState<number>(0)
   const [width,setWidth] = useState<number>(window.innerWidth)
   const [scale,setScale] = useState<number>(MIN/4);
   const [open,setOpen] = useState<Array<boolean>>(new Array(data.length).fill(false))
   const [range,setRange] = useState<{start : number,end : number}>({start : initialStart - 1.5*width*scale,end : initialStart + 1.5*width * scale});

   const handleDrag = (ev : MouseEventHandler<HTMLDivElement>) =>{
      if(ev.buttons >0){
         setOffset(offset + ev.movementX)
         if(offset  < -width){
            const newTime : number = range.start + 0.5* width * scale;
            console.log(toTimeFormat(newTime))
            setRange({start : newTime - 1.5*width*scale,end : newTime + 1.5*width * scale})
            setOffset(0)
         }
         else if(offset > width){
            const newTime : number = range.end - 0.5 * width * scale;
            console.log(toTimeFormat(newTime))
            setRange({start : newTime - 1.5*width*scale,end : newTime + 1.5*width * scale})
            setOffset(0)
         }
      }
   }

   const handleZoom = (nextScale : number) => {
      const centerTime : number = range.end + (offset -1.5 *width) * scale;
      setRange({start : centerTime - 1.5*width*nextScale,end : centerTime + 1.5*width * nextScale})
      setScale(nextScale)
   }
   
   const handleScrollZoom = (ev : WheelEvent) => {
      ev.ctrlKey && handleZoom(Math.sign(ev.deltaY) < 0 ? nextScale(scale) : prevScale(scale))
   } 

   const toogleRow = (ind : number)  => {
      setOpen(prev => {
         const tmp : boolean[] = [...prev]
         tmp[ind] = !prev[ind];
         return tmp
         
      })
   }

   window.onresize = () => setWidth(window.innerWidth); // make sure the system is responsive 
  document.body.addEventListener('wheel',(ev) => ev.ctrlKey && ev.preventDefault() ,{passive : false}) //disable zoom with control
 return (
 <>
   <GanttMenu scale={scale} setScale={handleZoom} data={data} isOpen={open} setIsOpen={toogleRow}/>
 <GanttContainerWrapper>
    <div id="ganttBody" style={{transform : `translateX(${offset}px)`}} onWheel={handleScrollZoom} onMouseMove={handleDrag}>
    <GanttTimeLine range={range} scale={scale} />
    {data.map((row : ganttRow,ind : number)=>
      <GanttRow isOpen={open[ind]} range={range} scale={scale} data={row} key={ind}/>
    )}
    </div>

 </GanttContainerWrapper>
 </>)
}

export default GanttContainer;
