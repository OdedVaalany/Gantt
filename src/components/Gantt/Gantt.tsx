import React, { FC, useEffect, useState } from 'react';
import { GanttWrapper } from './Gantt.styled';
import GanttTimeLine from '../GanttTimeLine/GanttTimeLine';
import { MIN, getThisRoundHours } from '../../utils/GanttUtils';
import GanttRow from '../GanttRow/GanttRow';

interface GanttProps {
	showMouseMarker?: boolean;
	data?: ganttRow[];
}

const Gantt: FC<GanttProps> = ({ showMouseMarker = false, data = [] }) => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const [scale, setScale] = useState<number>(MIN); //1px = scale seconds
	const [timeRange, setTimeRange] = useState<{ start: number; end: number }>(
		{
			start: getThisRoundHours(),
			end: getThisRoundHours() + scale * width,
		}
	);
	const [currentRelativeTimePosition, setCurrentRelativeTimePosition] =
		useState<number>(0);
	const [currentMousePosition, setCurrentMousePosition] =
		useState<number>(0);

	useEffect(() => {
		setCurrentRelativeTimePosition((Date.now() - timeRange.start) / scale);
	}, [timeRange]);

	useEffect(() => {
		setTimeRange({
			start: getThisRoundHours(),
			end: getThisRoundHours() + scale * width,
		});
	}, [scale]);

	const handleDrag = (ev: React.MouseEvent<HTMLDivElement>) => {
		setCurrentMousePosition(ev.clientX);
		const newStart: number = timeRange.start + ev.movementX * scale;
		ev.buttons > 0 &&
			setTimeRange({
				start: newStart,
				end: newStart + scale * width,
			});
	};

	return (
		<GanttWrapper>
			<div>
				<span
					id='marker'
					style={{
						right: `${
							currentRelativeTimePosition + width * 0.1
						}px`,
					}}
				/>
			</div>
			{showMouseMarker && (
				<span
					id='marker'
					style={{
						left: `${currentMousePosition}px`,
					}}
				/>
			)}
			<GanttTimeLine
				timeRange={timeRange}
				scale={scale}
				setScale={setScale}
			/>
			<div onMouseMove={handleDrag} id='ganttBody'>
				{data.map((data: ganttRow, index: number) => (
					<GanttRow
						data={data}
						key={index}
						timeRange={timeRange}
						scale={scale}
					/>
				))}
			</div>
		</GanttWrapper>
	);
};

export default Gantt;
