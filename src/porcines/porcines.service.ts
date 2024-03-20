// NestJS
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// TypeORM
import { Repository } from "typeorm";

// Entity
import { Porcine } from "./porcine.entity";

// DTO's
import { CreatePorcineDto, UpdatePorcineDto } from "../dto/porcines.dto";

@Injectable()
export class PorcinesService {
    constructor(
        @InjectRepository(Porcine)
        private porcineRepository: Repository<Porcine>
    ) {}

    async create(createPorcineDto: CreatePorcineDto): Promise<Porcine> {
        const porcine = this.porcineRepository.create(createPorcineDto);
        return this.porcineRepository.save(porcine);
    }

    findAll(): Promise<Porcine[]> {
        return this.porcineRepository.find({
            relations: ["client", "feed"],
        });
    }

    findOne(id: number): Promise<Porcine> {
        return this.porcineRepository.findOne({
            where: { id },
            relations: ["client", "feed"],
        });
    }

    async update(
        id: number,
        updatePorcineDto: UpdatePorcineDto
    ): Promise<Porcine> {
        const porcine = await this.porcineRepository.preload({
            id: +id,
            ...updatePorcineDto,
        });
        if (!porcine) {
            throw new Error("Porcine not found");
        }
        return this.porcineRepository.save(porcine);
    }

    async remove(id: number): Promise<void> {
        const porcine = await this.porcineRepository.findOne({
            where: { id },
        });

        if (!porcine) {
            throw new Error("Porcine not found");
        }
        await this.porcineRepository.remove(porcine);
    }
}
