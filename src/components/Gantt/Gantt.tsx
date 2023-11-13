import React, { FC, useEffect, useState } from "react";
import { GanttWrapper } from "./Gantt.styled";
import GanttTimeLine from "../GanttTimeLine/GanttTimeLine";
import {
  MIN,
  getThisDay,
  nextScale,
  prevScale,
  toTimeFormat,
} from "../../utils/GanttUtils";
import GanttRow from "../GanttRow/GanttRow";

interface GanttProps {
  data?: ganttRow[];
  onClick?: (t: ganttEvent) => void;
  initialStart? : number;
  ondbClick?: (t: ganttEvent) => void;
}

const Gantt: FC<GanttProps> = ({
  data = [],
  onClick = () => null,
  ondbClick = () => null,
  initialStart = Date.now()
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [scale, setScale] = useState<number>(MIN); //1px = scale seconds
  const [pScale, setPScale] = useState<number>(MIN); //1px = scale seconds
  const [mouseLocation, setMouseLocation] = useState<number>(0);
  const [currentTimePlace,setCurrentTimePlace] = useState<number>(0);
  const [timeRange, setTimeRange] = useState<{ start: number; end: number }>({
    start: initialStart,
    end: initialStart + scale * width,
  });
  useState<number>(0);

  useEffect(() => {
    const postTime: number =
      mouseLocation === 0
        ? initialStart
        : timeRange.start + pScale * mouseLocation;
    const newStart: number = postTime - scale * mouseLocation;
    setTimeRange({
      start: newStart,
      end: newStart + scale * width,
    });
    setMouseLocation(0);
  }, [scale]);

  const handleDrag = (ev: React.MouseEvent<HTMLDivElement>) => {
    const sens: number = 1;
    ev.buttons > 0 && true &&  ev.clientX % sens == 0 &&
      setTimeRange(() => {
        const newStart: number = timeRange.start + ev.movementX * 5 * scale;
        return {
          start: newStart,
          end: newStart + scale * width,
        };
      });
  };

  useEffect(()=> {
    const intr = setInterval(()=> {
      const pos : number = (Date.now() - timeRange.start) / scale + width*0.1;
      setCurrentTimePlace(pos);
    },scale)
    return () => clearInterval(intr)
  },[scale,width])

  const handleZoom = (ev: React.WheelEvent<HTMLDivElement>) => {
    setMouseLocation(ev.clientX < 0.9 * width ? 0.9 * width - ev.clientX : 0);
    if (ev.ctrlKey) {
      setPScale(scale);
      if (ev.deltaY / Math.abs(ev.deltaY) < 0) {
        setScale(nextScale(scale));
      } else {
        setScale(prevScale(scale));
      }
    }
  };

  window.onresize = () => setWidth(window.innerWidth); // make sure the system is responsive 
  document.body.addEventListener('wheel',(ev) => ev.ctrlKey && ev.preventDefault() ,{passive : false}) //disable zoom with control
  return (
    <GanttWrapper
      style={{
        backgroundPositionX: `${
          (((timeRange.start - getThisDay(timeRange.start)) / scale) % 60) -10
        }px`,
      }}
    >
              {Date.now() > timeRange.start && Date.now() < timeRange.end && (
          <div
            id="marker"
            style={{ right: `${(Date.now() - timeRange.start) / scale + width*0.1}px` }}
          ></div>
        )}
      <GanttTimeLine timeRange={timeRange} scale={scale} setScale={setScale} />
      <div onMouseMove={handleDrag} onWheel={handleZoom} id="ganttBody">
        {data.map((data: ganttRow, index: number) => (
          <GanttRow
            onClick={onClick}
            ondbClick={ondbClick}
            data={data}
            key={`row-${index}`}
            timeRange={timeRange}
            scale={scale}
          />
        ))}
      </div>
    </GanttWrapper>
  );
};

export default Gantt;
