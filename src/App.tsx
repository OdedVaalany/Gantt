import "./App.css";
import Gantt from "./components/Gantt/Gantt";
import { MIN } from "./utils/GanttUtils";

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
          endTime: Date.now() + 30 * MIN,
        },
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: false,
          startTime: Date.now() + 45 * MIN,
          endTime: Date.now() + 120 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now(),
          endTime: Date.now() + 30 * MIN,
        },
        {
          color: "#6fff52",
          content: "hello 2",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now() + 45 * MIN,
          endTime: Date.now() + 120 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
      [
        {
          color: "#6fff52",
          content: "hello",
          description: "this is very nice",
          isHollow: true,
          startTime: Date.now() + 15 * MIN,
          endTime: Date.now() + 45 * MIN,
        },
      ],
    ],

    rowColor: "#cbffc6",
    headerColor: "#99ffa8",
  },
];

function App() {
  return (
    <>
      <Gantt data={mockData} />
    </>
  );
}

export default App;
