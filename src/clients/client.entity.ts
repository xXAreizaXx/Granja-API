// NestJS
import { ObjectType, Field, ID } from "@nestjs/graphql";

// TypeORM
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Entity
import { Porcine } from "../porcines/porcine.entity";

@Entity("clients")
@ObjectType()
export class Client {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ unique: true })
    document: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    address: string;

    @Field()
    @Column()
    cellphone: string;

    @Field(() => [Porcine])
    @OneToMany(() => Porcine, (porcine) => porcine.client)
    porcines: Porcine[];
}
