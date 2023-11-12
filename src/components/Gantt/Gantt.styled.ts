import styled from "styled-components";

export const GanttWrapper = styled.div`
  width: 100%;
  overflow: visible;
  direction: rtl;
  position: relative;
  min-height: 100%;
  background-image: linear-gradient(to left, #808080 0.5%, white 1%);
  background-size: 60px 60px;

  #ganttBody {
    position: relative;
  }

  #marker {
    background-color: rgba(255, 0, 0, 0.5);
    width: 1px;
    height: 100%;
    position: absolute;
  }
`;
