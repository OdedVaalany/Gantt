import  { FC, useState } from "react";
import { GanttRowWrapper } from "./GanttRow.styled";
import GanttEvent from "../GanttEvent/GanttEvent";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { getCurrentReleventSubject, inRange } from "../../utils/GanttUtils";

interface GanttRowProps {
  data: ganttRow;
  timeRange: { start: number; end: number };
  scale: number;
  onClick: (t: ganttEvent) => void;
  ondbClick: (t: ganttEvent) => void;
}

const GanttRow: FC<GanttRowProps> = ({
  data,
  timeRange,
  scale,
  onClick,
  ondbClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const title: string = getCurrentReleventSubject(data);

  return (
    <GanttRowWrapper
      backgroundcolor={data.rowColor}
      headercolor={data.headerColor}
    >
      <div id="header">
        <div id="main">
          <p>{title}</p>
          {data.events.length > 1 &&<button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </button>}
        </div>
      </div>
      {data.events.map(
        (row: ganttEvent[], i: number) =>
          (isOpen || i < 1) && (
            <div className="row">
              {row.map(
                (event: ganttEvent, j) =>
                  inRange(event, timeRange) && (
                    <GanttEvent
                      onClick={onClick}
                      ondbClick={ondbClick}
                      key={`${i}${j}`}
                      data={event}
                      timeRange={timeRange}
                      scale={scale}
                    />
                  )
              )}
            </div>
          )
      )}
    </GanttRowWrapper>
  );
};

export default GanttRow;
