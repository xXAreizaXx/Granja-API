// NestJS
import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreatePorcineDto {
    @Field()
    readonly breed: "york" | "hamp" | "duroc";
    @Field(() => Int)
    readonly age: number;
    @Field(() => Int)
    readonly weight: number;
    @Field(() => Int)
    readonly feedId: number;
    @Field(() => Int)
    readonly clientId: number;
}

@InputType()
export class UpdatePorcineDto {
    @Field()
    readonly breed: "york" | "hamp" | "duroc";
    @Field(() => Int)
    readonly age: number;
    @Field(() => Int)
    readonly weight: number;
    @Field(() => Int)
    readonly feedId: number;
    @Field(() => Int)
    readonly clientId: number;
}
