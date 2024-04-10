// NestJS
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Services
import { PorcinesService } from "./porcines.service";

// Controllers
import { PorcinesController } from "./porcines.controller";

// Entity
import { Porcine } from "./porcine.entity";
import { PorcinesResolver } from './porcines.resolver';

@Module({
    controllers: [PorcinesController],
    imports: [TypeOrmModule.forFeature([Porcine])],
    providers: [PorcinesService, PorcinesResolver],
})
export class PorcinesModule {}
