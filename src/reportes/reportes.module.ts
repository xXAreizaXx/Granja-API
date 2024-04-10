import { Module } from "@nestjs/common";
import { ReportesService } from "./reportes.service";
import { ReportesController } from "./reportes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Porcine } from "../porcines/porcine.entity";
import { Client } from "../clients/client.entity";

@Module({
    providers: [ReportesService],
    controllers: [ReportesController],
    imports: [TypeOrmModule.forFeature([Porcine, Client])],
})
export class ReportesModule {}
