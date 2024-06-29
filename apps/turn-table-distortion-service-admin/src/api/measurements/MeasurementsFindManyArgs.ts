import { MeasurementsWhereInput } from "./MeasurementsWhereInput";
import { MeasurementsOrderByInput } from "./MeasurementsOrderByInput";

export type MeasurementsFindManyArgs = {
  where?: MeasurementsWhereInput;
  orderBy?: Array<MeasurementsOrderByInput>;
  skip?: number;
  take?: number;
};
