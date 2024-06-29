import { TurnTablePosition as TTurnTablePosition } from "../api/turnTablePosition/TurnTablePosition";

export const TURNTABLEPOSITION_TITLE_FIELD = "id";

export const TurnTablePositionTitle = (record: TTurnTablePosition): string => {
  return record.id?.toString() || String(record.id);
};
