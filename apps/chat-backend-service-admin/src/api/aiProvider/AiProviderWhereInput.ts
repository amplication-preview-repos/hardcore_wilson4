import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiProviderWhereInput = {
  apiKey?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
