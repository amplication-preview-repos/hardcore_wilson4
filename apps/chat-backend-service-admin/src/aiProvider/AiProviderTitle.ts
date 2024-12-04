import { AiProvider as TAiProvider } from "../api/aiProvider/AiProvider";

export const AIPROVIDER_TITLE_FIELD = "name";

export const AiProviderTitle = (record: TAiProvider): string => {
  return record.name?.toString() || String(record.id);
};
