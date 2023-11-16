import styled from 'styled-components';

export const GanttTimeLineWrapper = styled.div`
position: relative;
height: 30px;
position: sticky;
top: 0;
background-color: white;
z-index: 0;

.times{
    width: 60px;
    position: absolute;
    transform: translateX(50%);
    background-color: white;

    &::after{
        content: "";
        position: absolute;
        border: 0.5px solid #afafafaf;
        right: 50%;
        bottom: -100vh;
        height: 100vh;
    }
}
`;
