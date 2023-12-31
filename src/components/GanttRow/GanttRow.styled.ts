import styled from "styled-components";

export const GanttRowWrapper = styled.div<{
  backgroundcolor: string;
  headercolor: string;
}>`
  width: 100%;
  transition: 200ms;
  background-color: ${(props) => props.backgroundcolor}a0;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
  padding: 1px 0px;
  z-index: 1;

  .row {
    margin: 3px 0px;
    height: 40px;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-right: 10%;
    width: 90%;
    box-sizing: border-box;
  }
  #header {
    z-index: 1;
    height: 100%;
    background-color: ${(props) => props.headercolor};
    position: absolute;
    right: 0px;
    transition: 200ms;
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background-color: transparent;
    }

    #main {
      align-items: center;
      justify-content: space-evenly;
      grid-template-columns: 3fr 1fr;
      display: grid;

      * {
        outline: none;
        border: none;
        padding: 2px;
        margin: 0px;
      }
    }
  }
`;
