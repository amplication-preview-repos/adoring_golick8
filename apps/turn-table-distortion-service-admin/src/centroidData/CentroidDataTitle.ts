import { CentroidData as TCentroidData } from "../api/centroidData/CentroidData";

export const CENTROIDDATA_TITLE_FIELD = "id";

export const CentroidDataTitle = (record: TCentroidData): string => {
  return record.id?.toString() || String(record.id);
};
