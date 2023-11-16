import React, { FC } from 'react';
import { GanttMenuWrapper } from './GanttMenu.styled';
import { ZOOM_SCALE, getCurrentReleventSubject, mapScaleToVal, mapValToScale, nextScale, prevScale } from '../../utils/GanttUtils';
import { ArrowDownward, ArrowUpward, ZoomIn, ZoomOut } from '@mui/icons-material';

interface GanttMenuProps {
   scale : number;
   setScale : (num : number) => void,
   data : ganttRow[]
   isOpen : boolean[];
   setIsOpen : (ind : number) => void;
}
const GanttMenu: FC<GanttMenuProps> = ({
   scale, setScale,data,isOpen,setIsOpen
}) => (
   
 <GanttMenuWrapper>
    <div id="zommer">
        <button onClick={() => setScale(prevScale(scale))}>
          <ZoomOut />
        </button>
        <input
          type="range"
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
      {
         data.map((row : ganttRow,ind : number) => <div className='row' style={{background : row.headerColor,height : isOpen[ind] ? `${45 * row.events.length - 5}px`: '40px'}}>
            <div id="main" key={ind}>

            <p>{getCurrentReleventSubject(row)}</p>
            <button onClick={() => setIsOpen(ind)}>{isOpen[ind] ? <ArrowDownward/> : <ArrowUpward/>}</button>
            </div>
         </div>)
      }
 </GanttMenuWrapper>
);

export default GanttMenu;
