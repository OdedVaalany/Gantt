import styled from 'styled-components';

export const GanttWrapper = styled.div`
	width: 100%;
	overflow: visible;
	direction: rtl;
	position: relative;
	min-height: 100%;

	#ganttBody {
		position: relative;
		height: 100vh;
	}

	#marker {
		background-color: rgba(255, 0, 0, 0.5);
		width: 1px;
		height: 100%;
		position: absolute;
	}
`;
