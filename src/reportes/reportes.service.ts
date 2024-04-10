import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Porcine } from "../porcines/porcine.entity";
import { Client } from "../clients/client.entity";

@Injectable()
export class ReportesService {
    constructor(
        @InjectRepository(Porcine)
        private porcinoRepository: Repository<Porcine>,
        @InjectRepository(Client)
        private clienteRepository: Repository<Client>
    ) {}

    async totalPorcinos(): Promise<any> {
        // return this.porcinoRepository.count();
        const total = await this.porcinoRepository.count();
        return { totalPorcinos: total };
    }

    async promedioEdadPesoPorRaza(): Promise<any[]> {
        // Este es un ejemplo, necesitarías ajustar la consulta a tus necesidades y verificar la sintaxis SQL
        return this.porcinoRepository
            .createQueryBuilder("porcine")
            .select("breed")
            .addSelect("AVG(age)", "promedioEdad")
            .addSelect("AVG(weight)", "promedioPeso")
            .groupBy("breed")
            .getRawMany();
    }

    async porcinosPorCliente(): Promise<any[]> {
        // Ajusta según tu estructura y necesidades
        return this.clienteRepository
            .createQueryBuilder("client")
            .loadRelationCountAndMap("client.totalPorcinos", "client.porcines")
            .getMany();
    }
}
