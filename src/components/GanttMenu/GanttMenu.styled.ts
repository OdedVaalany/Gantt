import styled from 'styled-components';

export const GanttMenuWrapper = styled.div`
position: relative;
direction: rtl;
top: 0px;
right: 0px;
background: white;
z-index: 100;
position: absolute;
width: 100px;

#zommer {
    position: relative;
    height: 100%;
    top: 0px;
    height: 30px;
    background-color: white;
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

  .row {
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    margin: 5px;

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
