// NestJS
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateClientDto {
    @Field()
    readonly document: string;
    @Field()
    readonly name: string;
    @Field()
    readonly lastName: string;
    @Field()
    readonly address: string;
    @Field()
    readonly cellphone: string;
}

@InputType()
export class UpdateClientDto {
    @Field()
    readonly document: string;
    @Field()
    readonly name: string;
    @Field()
    readonly lastName: string;
    @Field()
    readonly address: string;
    @Field()
    readonly cellphone: string;
}
