import { TestOption as TTestOption } from "../api/testOption/TestOption";

export const TESTOPTION_TITLE_FIELD = "id";

export const TestOptionTitle = (record: TTestOption): string => {
  return record.id?.toString() || String(record.id);
};
