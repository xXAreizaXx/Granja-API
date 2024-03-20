// NestJS
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// TypeORM
import { Repository } from "typeorm";

// Entity
import { Client } from "../clients/client.entity";

// DTO's
import { CreateClientDto, UpdateClientDto } from "../dto/clients.dto";

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client)
        private clientRepository: Repository<Client>
    ) {}

    async create(createClientDto: CreateClientDto): Promise<Client> {
        const client = this.clientRepository.create(createClientDto);
        return this.clientRepository.save(client);
    }

    findAll(): Promise<Client[]> {
        return this.clientRepository.find();
    }

    findOne(id: number): Promise<Client> {
        return this.clientRepository.findOne({
            where: { id },
        });
    }

    async update(
        id: number,
        updateClientDto: UpdateClientDto
    ): Promise<Client> {
        const cliente = await this.clientRepository.preload({
            id: +id,
            ...updateClientDto,
        });
        if (!cliente) {
            throw new Error("Client not found");
        }
        return this.clientRepository.save(cliente);
    }

    async remove(id: number): Promise<void> {
        const cliente = await this.clientRepository.findOne({
            where: { id },
        });

        if (!cliente) {
            throw new Error("Client not found");
        }
        await this.clientRepository.remove(cliente);
    }
}
