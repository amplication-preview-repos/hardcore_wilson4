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
import { ChatSessionWhereInput } from "./ChatSessionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ChatSessionCountArgs {
  @ApiProperty({
    required: false,
    type: () => ChatSessionWhereInput,
  })
  @Field(() => ChatSessionWhereInput, { nullable: true })
  @Type(() => ChatSessionWhereInput)
  where?: ChatSessionWhereInput;
}

export { ChatSessionCountArgs as ChatSessionCountArgs };
