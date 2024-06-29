import { OutputFilenameWhereInput } from "./OutputFilenameWhereInput";
import { OutputFilenameOrderByInput } from "./OutputFilenameOrderByInput";

export type OutputFilenameFindManyArgs = {
  where?: OutputFilenameWhereInput;
  orderBy?: Array<OutputFilenameOrderByInput>;
  skip?: number;
  take?: number;
};
