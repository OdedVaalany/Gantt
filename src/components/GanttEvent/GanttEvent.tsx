import React, { FC } from "react";
import { GanttEventWrapper } from "./GanttEvent.styled";
import { toTimeFormat } from "../../utils/GanttUtils";

interface GanttEventProps {
  data: ganttEvent;
  timeRange: { start: number; end: number };
  scale: number;
  onClick: (t: ganttEvent) => void;
  ondbClick: (t: ganttEvent) => void;
}

const GanttEvent: FC<GanttEventProps> = ({
  data,
  scale,
  timeRange,
  onClick,
  ondbClick,
}) => {
  const pos: number = (data.startTime - timeRange.start) / scale;
  const width: number = (data.endTime - data.startTime) / scale;
  return (
    <>
      <GanttEventWrapper
        onClick={() => onClick(data)}
        onDoubleClick={() => ondbClick(data)}
        des={`${data.content}- ${data.description}  ${toTimeFormat(
          data.startTime
        )}-${toTimeFormat(data.endTime)}`}
        color={data.color}
        width={width}
        pos={pos}
        style={{
          backgroundColor: data.isHollow ? "transparent" : data.color,
        }}
      >
        <p>{data.content}</p>
      </GanttEventWrapper>
    </>
  );
};
export default GanttEvent;
