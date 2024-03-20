// TypeORM
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Entity
import { Porcine } from "../porcines/porcine.entity";

@Entity("feeds")
export class Feed {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    description: string;

    @Column()
    dose: string;

    @OneToMany(() => Porcine, (porcine) => porcine.feed)
    porcines: Porcine[];
}
