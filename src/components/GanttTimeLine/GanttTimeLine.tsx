import React, { FC, ReactNode, useEffect, useState } from 'react';
import { GanttTimeLineWrapper } from './GanttTimeLine.styled';
import {
	DAY,
	HOUR,
	SEC,
	ZOOM_SCALE,
	getStartTimeForTimeLine,
	getThisDay,
	getThisNextDay,
	mapScaleToVal,
	mapValToScale,
	nextScale,
	prevScale,
	toDayFormat,
	toTimeFormat,
} from '../../utils/GanttUtils';
import { ZoomIn, ZoomOut } from '@mui/icons-material';

interface GanttTimeLineProps {
	timeRange: { start: number; end: number };
	scale: number;
	setScale: (t: number) => void;
}

const GanttTimeLine: FC<GanttTimeLineProps> = ({
	timeRange,
	scale,
	setScale,
}) => {
	const [daysComponents, setDaysComponent] = useState<ReactNode[]>([]);
	const [timesComponents, setTimesComponent] = useState<ReactNode[]>([]);

	useEffect(() => {
		const children: ReactNode[] = [];
		for (
			let i: number = getThisDay(timeRange.start);
			i <= getThisNextDay(timeRange.end);
			i += DAY
		) {
			children.push(
				<div
					key={i}
					className='days'
					style={{
						right: `${(i - timeRange.start - DAY / 2) / scale}px`,
						width: `${DAY / scale}px`,
					}}>
					<div>{toDayFormat(i)}</div>
				</div>
			);
		}
		setDaysComponent(children);

		const children2: ReactNode[] = [];
		for (
			let i: number = getThisDay(timeRange.start);
			i <= timeRange.end;
			i += 60 * scale
		) {
			children2.push(
				<div
					key={i}
					className={`${i % HOUR == 0 && 'hours'} times`}
					style={{
						right: `${(i - timeRange.start) / scale}px`,
					}}>
					{toTimeFormat(i)}
				</div>
			);
		}
		setTimesComponent(children2);
	}, [timeRange]);

	return (
		<GanttTimeLineWrapper>
			<div id='days'>{daysComponents}</div>
			<div id='times'>{timesComponents}</div>
			<div id='zommer'>
				<button onClick={() => setScale(prevScale(scale))}>
					<ZoomOut />
				</button>
				<input
					type='range'
					min={0}
					max={ZOOM_SCALE.length - 1}
					step={1}
					value={mapScaleToVal(scale)}
					onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
						setScale(mapValToScale(ev.target.valueAsNumber))
					}
				/>
				<button onClick={() => setScale(nextScale(scale))}>
					<ZoomIn />
				</button>
			</div>
		</GanttTimeLineWrapper>
	);
};

export default GanttTimeLine;
