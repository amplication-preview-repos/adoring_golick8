import { OutputFilename as TOutputFilename } from "../api/outputFilename/OutputFilename";

export const OUTPUTFILENAME_TITLE_FIELD = "id";

export const OutputFilenameTitle = (record: TOutputFilename): string => {
  return record.id?.toString() || String(record.id);
};
