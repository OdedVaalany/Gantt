import React, { FC, useState } from 'react';
import { GanttRowWrapper } from './GanttRow.styled';
import GanttEvent from '../GanttEvent/GanttEvent';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { getCurrentReleventSubject } from '../../utils/GanttUtils';

interface GanttRowProps {
	data: ganttRow;
	timeRange: { start: number; end: number };
	scale: number;
}

const GanttRow: FC<GanttRowProps> = ({ data, timeRange, scale }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const title: string = getCurrentReleventSubject(data);

	return (
		<GanttRowWrapper
			backgroundColor={data.rowColor}
			headerColor={data.headerColor}
			height={isOpen ? 40 * data.events.length : 40}>
			<div id='header'>
				<div id='main'>
					<p>{title}</p>
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
					</button>
				</div>
			</div>
			{data.events.map(
				(row: ganttEvent[], i: number) =>
					(isOpen || i < 1) && (
						<div className='row'>
							{row.map((event: ganttEvent, j) => (
								<GanttEvent
									key={`${i}-${j}`}
									data={event}
									timeRange={timeRange}
									scale={scale}
								/>
							))}
						</div>
					)
			)}
		</GanttRowWrapper>
	);
};

export default GanttRow;
