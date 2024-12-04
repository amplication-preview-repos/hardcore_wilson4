/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiProviderCreateInput } from "./AiProviderCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAiProviderArgs {
  @ApiProperty({
    required: true,
    type: () => AiProviderCreateInput,
  })
  @ValidateNested()
  @Type(() => AiProviderCreateInput)
  @Field(() => AiProviderCreateInput, { nullable: false })
  data!: AiProviderCreateInput;
}

export { CreateAiProviderArgs as CreateAiProviderArgs };
