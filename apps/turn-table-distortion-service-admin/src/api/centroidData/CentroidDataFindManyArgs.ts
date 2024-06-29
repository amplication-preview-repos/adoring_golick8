import { CentroidDataWhereInput } from "./CentroidDataWhereInput";
import { CentroidDataOrderByInput } from "./CentroidDataOrderByInput";

export type CentroidDataFindManyArgs = {
  where?: CentroidDataWhereInput;
  orderBy?: Array<CentroidDataOrderByInput>;
  skip?: number;
  take?: number;
};
