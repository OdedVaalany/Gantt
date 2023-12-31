import styled from "styled-components";

export const GanttTimeLineWrapper = styled.div`
  position: sticky;
  top: 0px;
  z-index: 0;
  direction: rtl;
  height: 60px;
  background-color: white;
  z-index: 100;

  .days {
    position: absolute;
    top: 0;
    overflow: visible;
    transform: translateX(50%);
    z-index: 1;
    border: 1px solid gray;
    border-width: 0px 1px;
    padding: 0px 10px;
    box-sizing: border-box;
    direction: rtl;
  }

  .days div {
    width: 200px;
    display: block;
    position: sticky;
  }

  .times {
    position: absolute;
    top: 0px;
    display: block;
    transform: translateX(50%);
    z-index: 1;
    font-size: 12pt;
    font-weight: lighter;
    background-color: white;
  }

  .hours {
    font-weight: bold;
  }

  #times,
  #days {
    position: relative;
    height: 30px;
    overflow: hidden;
    width: 90%;
    margin-right: 10%;
  }

  #zommer {
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0px;
    width: 100px;
    z-index: 1;
    background-color: white;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      width: fit-content;
      height: fit-content;
      padding: 2px;
    }

    input {
      width: 60%;
    }
  }

`;
