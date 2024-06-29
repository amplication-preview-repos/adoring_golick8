import { Measurements as TMeasurements } from "../api/measurements/Measurements";

export const MEASUREMENTS_TITLE_FIELD = "id";

export const MeasurementsTitle = (record: TMeasurements): string => {
  return record.id?.toString() || String(record.id);
};
