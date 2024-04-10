// NestJS
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateFeedDto {
    @Field()
    readonly description: string;
    @Field()
    readonly dose: string;
}

@InputType()
export class UpdateFeedDto {
    @Field()
    readonly description: string;
    @Field()
    readonly dose: string;
}
