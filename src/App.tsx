import "./App.css";
import GanttContainer from "./components/GanttContainer/GanttContainer";
import {  HOUR, MIN } from "./utils/GanttUtils";
import AcUnitIcon from '@mui/icons-material/AcUnit';
const mockData: ganttRow[] = [
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
  {
    events: [
      [
        {
          color: "#ffa552",
          content: "hello",
          description: "this is very nice",
          isHollow: false,
          startTime: Date.now(),
          endTime: Date.now() + 1 * HOUR,
          displayName : "ליצי",
          icon : <AcUnitIcon/>
        },
      ],
      [
        {
          color: "#ffa552",
          content: "שמואל",
          description: "זה ממש נחמד מה שקורה כאן",
          isHollow: true,
          startTime: Date.now() + 1 * MIN,
          endTime: Date.now() + 2 * HOUR,
          displayName : "בננה"
        },
      ]
    ],
    rowColor: "#ffe2c6",
    headerColor: "#FFCA99",
  },
];

function App() {
  return (
    <>
      <GanttContainer data={mockData}/>
    </>
  );
}

export default App;
