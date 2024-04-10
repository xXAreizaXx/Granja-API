// NestJS
import { ObjectType, Field, ID, Int, Float } from "@nestjs/graphql";

// TypeORM
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";

// Entity
import { Client } from "../clients/client.entity";
import { Feed } from "../feeds/feed.entity";

@ObjectType()
@Entity("porcines")
export class Porcine {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({
        type: "enum",
        enum: ["york", "hamp", "duroc"],
        default: "york",
    })
    breed: "york" | "hamp" | "duroc";

    @Field(() => Int)
    @Column()
    age: number;

    @Field(() => Float)
    @Column("float")
    weight: number;

    @Field(() => Feed)
    @ManyToOne(() => Feed, (feed) => feed.porcines)
    @JoinColumn({ name: "feedId" })
    feed: Feed;

    @Field(() => Client)
    @ManyToOne(() => Client, (client) => client.porcines)
    @JoinColumn({ name: "clientId" })
    client: Client;
}
