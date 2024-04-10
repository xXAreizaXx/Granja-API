// NestJS
import { ObjectType, Field, ID } from "@nestjs/graphql";

// TypeORM
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Entity
import { Porcine } from "../porcines/porcine.entity";

@Entity("feeds")
@ObjectType()
export class Feed {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    description: string;

    @Field()
    @Column()
    dose: string;

    @Field(() => [Porcine])
    @OneToMany(() => Porcine, (porcine) => porcine.feed)
    porcines: Porcine[];
}
