import styled from "styled-components";
const PADDING = 4;
export const GanttEventWrapper = styled.div<{
  color: string;
  width: number;
  pos: number;
  des: string;
}>`
  top: 0px;
  height: 100%;
  width: ${(props) => `${props.width - PADDING < 0 ? props.width : props.width - PADDING}px`};
  right: ${(props) => `${props.pos}px`};
  border: 2px solid ${(props) => props.color};
  box-sizing: border-box;
  display: grid;
  grid-template-columns : 1fr 2fr;
  column-gap: 3px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: absolute;
  border-radius: 10px;
  overflow-y: visible;
  text-overflow : ellipsis;

  padding: 2px;
  p {
    display: flex;
    width : 100%;
    text-align: right;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover::after {
    display: block;
    background: #333;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    color: #fff;
    direction: rtl;
    content: "${(props) => props.des}";
    ${(props) => props.pos > 220 && `left: ${props.width + PADDING}px;`}
    ${(props) => props.pos <= 220 && `right: ${props.width + PADDING}px;`}
		top: 0px;
    font-size: 10pt;
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    white-space: pre;
  }
`;
