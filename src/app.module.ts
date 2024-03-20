// NestJS
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Modules
import { ClientsModule } from "./clients/clients.module";
import { PorcinesModule } from "./porcines/porcines.module";
import { FeedsModule } from './feeds/feeds.module';

// TypeORM
import "reflect-metadata";

@Module({
    controllers: [],
    imports: [
        TypeOrmModule.forRoot({
            database: "nestdb",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            host: "localhost",
            password: "Jorgea2001",
            port: 5432,
            synchronize: true,
            type: "postgres",
            username: "postgres",
        }),
        PorcinesModule,
        ClientsModule,
        FeedsModule,
    ],
    providers: [],
})
export class AppModule {}
