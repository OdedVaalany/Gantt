interface ganttEvent {
	isHollow: boolean;
	color: string;
	content: string;
	description: string;
	startTime: number;
	endTime: number;
}

interface ganttRow {
	headerColor: string;
	rowColor: string;
	events: ganttEvent[][];
}
