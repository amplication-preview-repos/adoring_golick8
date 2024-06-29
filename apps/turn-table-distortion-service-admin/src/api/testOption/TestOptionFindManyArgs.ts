import { TestOptionWhereInput } from "./TestOptionWhereInput";
import { TestOptionOrderByInput } from "./TestOptionOrderByInput";

export type TestOptionFindManyArgs = {
  where?: TestOptionWhereInput;
  orderBy?: Array<TestOptionOrderByInput>;
  skip?: number;
  take?: number;
};
