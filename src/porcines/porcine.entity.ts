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

@Entity("porcines")
export class Porcine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ["york", "hamp", "duroc"],
        default: "york",
    })
    breed: "york" | "hamp" | "duroc";

    @Column()
    age: number;

    @Column("float")
    weight: number;

    @ManyToOne(() => Feed, (feed) => feed.porcines)
    @JoinColumn({ name: "feedId" })
    feed: Feed;

    @ManyToOne(() => Client, (client) => client.porcines)
    @JoinColumn({ name: "clientId" })
    client: Client;
}
