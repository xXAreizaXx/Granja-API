// NestJS
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Services
import { ClientsService } from "./clients.service";

// Controllers
import { ClientsController } from "./clients.controller";

// Entity
import { Client } from "./client.entity";
import { ClientsResolver } from './clients.resolver';

@Module({
    controllers: [ClientsController],
    imports: [TypeOrmModule.forFeature([Client])],
    providers: [ClientsService, ClientsResolver],
})
export class ClientsModule {}
