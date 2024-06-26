// NestJS
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Modules
import { ClientsModule } from "./clients/clients.module";
import { PorcinesModule } from "./porcines/porcines.module";
import { FeedsModule } from "./feeds/feeds.module";
import { ReportesModule } from "./reportes/reportes.module";

// TypeORM
import "reflect-metadata";

@Module({
    controllers: [],
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), "src/schema.gql"),
        }),
        TypeOrmModule.forRoot({
            database: process.env.PGDATABASE || "nestdb",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            host: process.env.PGHOST || "localhost",
            password: process.env.PGPASSWORD || "Jorgea2001",
            port: 5432,
            synchronize: true,
            type: "postgres",
            username: process.env.PGUSER || "postgres",
        }),
        PorcinesModule,
        ClientsModule,
        FeedsModule,
        ReportesModule,
    ],
    providers: [],
})
export class AppModule {}
