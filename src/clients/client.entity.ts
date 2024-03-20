// TypeORM
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Entity
import { Porcine } from "../porcines/porcine.entity";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    document: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    address: string;

    @Column()
    cellphone: string;

    @OneToMany(() => Porcine, (porcine) => porcine.client)
    porcines: Porcine[];
}
