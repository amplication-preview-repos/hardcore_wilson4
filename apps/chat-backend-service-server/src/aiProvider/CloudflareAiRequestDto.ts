import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class CloudflareAiRequestDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    inputText!: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    metadata?: InputJsonValue;
}

export { CloudflareAiRequestDto as CloudflareAiRequestDto };