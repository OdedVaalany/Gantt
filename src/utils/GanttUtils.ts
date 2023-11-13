import dayjs from "dayjs";

export const SEC: number = 1000;
export const MIN: number = 60 * SEC;
export const HOUR: number = 60 * MIN;
export const DAY: number = 24 * HOUR;
export const ZOOM_SCALE: number[] = [
  4 * MIN,
  3 * MIN,
  2 * MIN,
  MIN,
  45 * SEC,
  30 * SEC,
  15 * SEC,
  SEC,
];

export function getThisRoundHours(): number {
  return Date.now() - (Date.now() % HOUR);
}

export function getThisDay(date: number): number {
  return date - (date % DAY) - 2 * HOUR;
}
export function getThisNextDay(date: number): number {
  return date - (date % DAY) - 2 * HOUR + DAY;
}

export function toTimeFormat(date: number): string {
  if (date % HOUR === 0) return dayjs(date).format("HH");
  return dayjs(date).format("HH:mm");
}

export function toDayFormat(date: number): string {
  return  `יום ${["שבת","ראשון","שני","שלישי","רביעי","חמישי","שישי"][dayjs(date).day()]} ה-${dayjs(date).format("DD/MM/YYYY")}`;
}

export function getCurrentReleventSubject(data: ganttRow): string {
  if (data.events.length > 0) {
    for (const ev of data.events[0]) {
      if (ev.startTime < Date.now() && ev.endTime > Date.now()) {
        return ev.displayName;
      }
    }
  }
  return "אין רצף פעיל";
}

export function mapScaleToVal(scale: number): number {
  return ZOOM_SCALE.indexOf(scale);
}

export function mapValToScale(val: number): number {
  return ZOOM_SCALE[val];
}
export function nextScale(scale: number): number {
  const num: number = mapScaleToVal(scale);
  if (num !== -1 && num + 1 < ZOOM_SCALE.length) return ZOOM_SCALE[num + 1];
  return scale;
}

export function prevScale(scale: number): number {
  const num: number = mapScaleToVal(scale);
  if (num !== -1 && num - 1 >= 0) return ZOOM_SCALE[num - 1];
  return scale;
}

export function inRange(
  eventData: ganttEvent,
  timeRange: { start: number; end: number }
): boolean {
  return (
    eventData.endTime > timeRange.start && eventData.startTime < timeRange.end
  );
}
