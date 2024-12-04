import { AiProviderWhereInput } from "./AiProviderWhereInput";
import { AiProviderOrderByInput } from "./AiProviderOrderByInput";

export type AiProviderFindManyArgs = {
  where?: AiProviderWhereInput;
  orderBy?: Array<AiProviderOrderByInput>;
  skip?: number;
  take?: number;
};
