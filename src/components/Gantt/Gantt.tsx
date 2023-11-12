import React, { FC, useEffect, useState } from "react";
import { GanttWrapper } from "./Gantt.styled";
import GanttTimeLine from "../GanttTimeLine/GanttTimeLine";
import {
  MIN,
  nextScale,
  prevScale,
  toTimeFormat,
} from "../../utils/GanttUtils";
import GanttRow from "../GanttRow/GanttRow";

interface GanttProps {
  data?: ganttRow[];
  onClick?: (t: ganttEvent) => void;
  ondbClick?: (t: ganttEvent) => void;
}

const Gantt: FC<GanttProps> = ({
  data = [],
  onClick = () => null,
  ondbClick = () => null,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [scale, setScale] = useState<number>(MIN); //1px = scale seconds
  const [mouseLocation, setMouseLocation] = useState<number>(0);
  const [timeRange, setTimeRange] = useState<{ start: number; end: number }>({
    start: Date.now(),
    end: Date.now() + scale * width,
  });
  useState<number>(0);

  useEffect(() => {
    const postTime: number = timeRange.start + scale * mouseLocation;
    const newStart: number = postTime - scale * (0.9 * width - mouseLocation);
    console.log(toTimeFormat(postTime));
    console.log(toTimeFormat(newStart));
    setTimeRange({
      start: newStart,
      end: newStart + scale * width,
    });
  }, [scale]);

  const handleDrag = (ev: React.MouseEvent<HTMLDivElement>) => {
    // const sens: number = 60;
    ev.buttons > 0 && true;
    //   ev.clientX % sens == 0 &&
    //   setTimeRange(() => {
    //     const newStart: number = timeRange.start + ev.movementX * sens * scale;
    //     return {
    //       start: newStart,
    //       end: newStart + scale * width,
    //     };
    //   });
  };

  const handleZoom = (ev: React.WheelEvent<HTMLDivElement>) => {
    setMouseLocation(ev.clientX + 0.1 * width);
    if (ev.altKey) {
      if (ev.deltaY / Math.abs(ev.deltaY) < 0) {
        setScale(nextScale(scale));
      } else {
        setScale(prevScale(scale));
      }
    } else {
      setTimeRange(() => {
        const newStart: number =
          timeRange.start - (ev.deltaY / Math.abs(ev.deltaY)) * 60 * scale;
        return {
          start: newStart,
          end: newStart + scale * width,
        };
      });
    }
  };

  window.onresize = () => setWidth(window.innerWidth);

  return (
    <GanttWrapper>
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
