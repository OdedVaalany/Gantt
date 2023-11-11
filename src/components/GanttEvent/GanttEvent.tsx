import React, { FC } from 'react';
import { GanttEventWrapper } from './GanttEvent.styled';
import { toTimeFormat } from '../../utils/GanttUtils';

interface GanttEventProps {
	data: ganttEvent;
	timeRange: { start: number; end: number };
	scale: number;
}

const GanttEvent: FC<GanttEventProps> = ({ data, scale, timeRange }) => {
	const pos: number = (data.startTime - timeRange.start) / scale;
	const width: number = (data.endTime - data.startTime) / scale;
	return (
		<>
			<GanttEventWrapper
				des={`${data.content}- ${data.description}  ${toTimeFormat(
					data.startTime
				)}-${toTimeFormat(data.endTime)}`}
				color={data.color}
				width={width}
				pos={pos}
				isHollow={data.isHollow}>
				<p>{data.content}</p>
			</GanttEventWrapper>
		</>
	);
};
export default GanttEvent;
