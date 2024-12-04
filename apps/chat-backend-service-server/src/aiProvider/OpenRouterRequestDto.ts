import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class OpenRouterRequestDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    query!: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    parameters?: InputJsonValue;
}

export { OpenRouterRequestDto as OpenRouterRequestDto };