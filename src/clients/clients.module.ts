// NestJS
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Services
import { ClientsService } from "./clients.service";

// Controllers
import { ClientsController } from "./clients.controller";

// Entity
import { Client } from "./client.entity";

@Module({
    controllers: [ClientsController],
    imports: [TypeOrmModule.forFeature([Client])],
    providers: [ClientsService],
})
export class ClientsModule {}
