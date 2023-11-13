import "./App.css";
import Gantt from "./components/Gantt/Gantt";
import {  MIN } from "./utils/GanttUtils";
import AcUnitIcon from '@mui/icons-material/AcUnit';
const mockData: ganttRow[] = [
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now(),
          endTime: Date.now() + 1 * MIN,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: false,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * MIN,
          displayName : "בננה"
        },
      ],
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  }
];

function App() {
  return (
    <>
      <Gantt data={mockData} />
    </>
  );
}

export default App;
